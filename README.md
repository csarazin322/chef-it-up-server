# Chef It Up Server
## Overview
This is the backend for the Chef It Up application. It is an Express.js server that interacts with a MongoDB instance. 
## Setup
1. clone the repository and run `npm install`
2. ensure an instance of MongoDB is running. If using locally, the server looks for MongoDB on the default port of `27017` but adding an environment variable for `env.DB_CONNECTION_STRING` will allow for further customization
3. (optional) take advantage of the starter fake database data in the case of development or viewing the functionality of the app, do so by performing `mongorestore ./recipes_starter_dump/recipes`
4. start the express server in your perfered way, one of which may be `nodemon app.js` or `node app.js`
5. set up and run the front end to use the application