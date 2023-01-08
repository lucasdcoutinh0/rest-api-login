# This is an simple RESTFUL API 

- Steps to run the application: 
  - Setup POSTMAN
    - [Get POSTMAN](https://www.postman.com/)
    -  After that you can import the postman_collection.json to your postman
  - Running the Application
    - yarn install
    - yarn dev
  - After this Setup you are ready to start to make requests
    - To create a user use the route `/api/users/` with post
    - To create a session for this user use the route `/api/session/` with post
    - To get this session of this user use the route `/api/session/` with get
    - To delete a session (logout) you can use the route `/api/session` with delete
    - And to se all the metrics you can use the route `/api/metrics/

In progress
    - Add unit tests and e2e tests
    - Add a front-end page to interact
    - Add a swager 