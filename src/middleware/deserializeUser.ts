import { get } from "lodash";
import { Request, Response, NextFunction } from "express";
import { verifyJwt } from "../utils/jwt.utils";
import { reIssueAccessToken } from "../service/session.service";
import { verify } from "crypto";

const deserializeUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const accessToken = get(req, "headers.authorization", "").replace(
    "Bearer ",
    ""
  );

  const refreshToken = get(req, "headers.x-refresh");

  if(!accessToken){
    return next();
  }

  const { decoded, expired } = verifyJwt(accessToken, "accessTokenPublicKey");

  if (decoded) {
    res.locals.user = decoded;
    return next();
  }

  if (expired && refreshToken) {
    const newAccesToken = await reIssueAccessToken({ refreshToken });

    if (newAccesToken) {
      res.setHeader("x-access-token", newAccesToken);
    }

    const result = verifyJwt(newAccesToken as string, "accessTokenPublicKey");

    res.locals.user = result.decoded;
    return next();
  }

  return next();
    
};

export default deserializeUser;
