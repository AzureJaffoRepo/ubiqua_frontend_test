# Ubiqua's Pokemon Web App

The purpose of this test is to assess your skills at learning a new API and using that API in a basic web
application, and in communicating what you’ve learned with others. We will review your
application for functionality, coding style, and your communication skills.

## Installation

First, clone this project in your computer and load node_modules 

```bash
npm install
```


## Run development server
Steps for use this API local

1. Run Angular with the command

```bash
ng serve -o
```

## Things i learn of this
1. Improve my abilities in CSS concepts, making smooth transitions for the pokemon's list
2. Use environment file to setup the development API URL connection and production API URL connection
3. How to properly deploy into heroku :cold_sweat: . I read some developer's blog who talk about this. And this is how a made it.

### Steps
1. Make a build of the angular project like this
```bash
ng build --aot --prod
```
2. Install express & path into the Angular Project
```bash
npm install express
npm install path
```
3. Add *engines* in your package.json like this
```bash
"engines": {
    "node": "12.18.2",
    "npm": "6.14.5"
  }
```
4. Create a server.js file in the root of the project and copy this into that file
```node
//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/<name-of-your-angular-project>'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: '.dist/<name-of-your-angular-project>'}),
);

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
```
5. Update your script in your packege.json 
```bash
 "scripts": {
    "ng": "ng",
    "start": "node server.js",
    "build": "ng build",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e",
    "heroku-postbuild": "ng build --prod"
  }
```
*the heroku postbuild command its the command the heroku will run to make the build... or that's i get it...*

6. Push it into your github
7. Deploy in your Heroku (this part is automatic if you configured in that way..)

Done!!!

## Next Steps
* Create a *Profile* section
* Display your teams wins and loose
* Edit pokemn team section
* Include *Battle Button* for interact with other team players.

## License
[MIT](https://choosealicense.com/licenses/mit/)