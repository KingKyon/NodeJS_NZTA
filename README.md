<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png" style="width: 6vw; height: 8vh;"/>
# NodeJS Test API
This test API is written using Express/NodeJS and for test purposes. This server application listens on server port 443 by default (if using docker, this can be mapped differently using port mapping). The port variable can be edited within the "server.js" file if you wish to adjust the listening port. The server will require Node JS in order to run this file.

## Restful functions
<b>GET</b><br><br>
Please use the /Test URI in order to use GET request. Reponse should return JSON array with test message confirming API is working correctly.

## Docker
The docker file is included if you would like to create a docker image for containerization. Please see the file named "dockerfile. In order to build the image, you will
obviously need to have Docker Desktop installed and run the following command in Windows Terminal session once you have navigated into the application directory: <br><br>
`docker build -t <imagename> .`

## Usage
Feel free to use as and how you wish!
