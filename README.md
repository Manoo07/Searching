# project setup
 - clone the project in your local repo
 - execute the `npm install` to install npm modules
 - create .env file in root dir and add the follwing in environment variables
 - `PORT=3000`
 - Inside the  `src/config` folder create a new file config.js and then add the follwing peice of json
 ``````
 "development": {
    "username": <DB_NAME>,
    "password": <PASSWORD_OF_DB>,
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }


`````` 
 - once you added DB config as listed above ,go to/ cd to the src folder and execute the command `npx sequelize db:create`

 ## Flights Table or DB dessign
 - ID : to identify flight uniquly
 - Airplane table
 - Flight table
 - Airport table 
 - city 

 - A flight belongs to an airplane but one airplane can be used to fly multiple flights
 - A city has many airports and an airport belongs to single city 
 - One airport can have many flights but a flights flies through a single airport at a time


 ## Tables
 ### City Table -> Id,name,created_at,updated_at
 ### Airport Table -> Id,name,address,city_id,created_at,updated_at
  - Relationship -> City has many Airports but one Airport is in one City (1:N),
  so city does'nt store info about Airports , but every airport stores city since it is unique for a Airport 
  
 