This a nodejs-express-mongodb application. It follows some if the basic standards of Node, APIs and Coding.

Pilot Commit: Created a Node API project to get started on weather project.
- Completed the following APIS end to end:
```
  - fetch API
```

You have to Perform all the following steps in the given sequence for Installing this project.

**Install Nodejs**
- Ubuntu Machine
```
$ sudo apt-get install nodejs-legacy
```
- Mac Machine
```
$ brew install nodejs
```
Verify this by using `node -v` and `npm -v`

**Install Mongodb**
- Ubuntu Machine
```
$ sudo apt-get install mongodb
```
The app will automatically create *node-express-stack* database and *users* collection.

- Mac Machine
```
$ brew install mongodb
```
Verify this by using `mongo -version`

Step 1: Add NodeJs PPA. First you need to node.js ppa in our system provide by nodejs official website.
Step 2: Install Node.js and NPM. After adding required PPA file, lets install Nodejs package.
```
	$ sudo apt-get update
	$ sudo apt-get install nodejs
	$ sudo apt-get install npm
```

Step 3: Check Node.js and NPM Version
```
	$ node --version
	$ npm --version
```
Step 4: Install mongodb
```
	$ sudo apt-get install -y mongodb-org
```
Step 5: Install mongoose
```
	$ npm install mongoose
```
Step 6: Install node dependencies
```
    $ npm install
```

Step 7: To start project use following command.
```
	$ npm start
```

API Documentation:-

- Based Endpoint: http://localhost:8000?city=xxxx
Method: GET
- Request Headers:
- Version: 1.0

- Content-Type: application/json

- Errors: Following are a few common error responses that are receive if basic required keys are not sent in the HTTP header.
```
Error
Description:
500: ERROR_OCCURED - Error occured in fetching the Weather Data
501: CITY_NAME_ERROR - You must provide city name appended in the URL like http://localhost:8000?city=xxx
