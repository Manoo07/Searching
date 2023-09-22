#project setup
 -clone the project in your local repo
 -execute the `npm install` to install npm modules
 - create .env file in root dir and add the follwing in environment variables
 - `PORT=3000`
 - Inside the  `src/config` folder create a new file config.js and then add the follwing peice of json
 -------
 "development": {
    "username": <DB_NAME>,
    "password": <PASSWORD_OF_DB>,
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }