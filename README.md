# dockerize-nodejs-express-restapi
Simple example implementation of dockerized nodejs express restapi

To try out this example in your local system, please follow steps mentioned below:
- Clone dockerize-nodejs-express-restapi repository in your local system.
- Change directory to dockerize-nodejs-express-restapi.
- Run "npm install"
- Make sure you have checked Dockerfile as per your requirement and make necessary changes if needed.
- Run "docker build -t docker-restapi . " (where docker-restapi is the application name i have given in my case, you may give application name as per your requirement)
- Run "docker run --publish 3000:3000 docker-restapi"
- Now you will be able to access following api endpoints from your localhost:3000 port if you don't change the port.
- GET http://localhost:3000/first
- POST http://localhost:3000/second

This is the most simplest example i could prepare to be used as starter for any requirement matching to this tools/framework and technologies.

Good Luck!
