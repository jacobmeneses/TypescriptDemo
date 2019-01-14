import * as express from "express"
import {SiteController} from './controllers/site'
import {SearchController} from './controllers/search'
import { networkInterfaces } from "os";
import * as passport from 'passport'
var flash = require('connect-flash');
var session = require("express-session"),
    bodyParser = require("body-parser");

import { getAuthStrategy, deserializeUser, serializeUser, AuthedMiddleware } from './common/auth'

var app = express()

const siteController = new SiteController()
const searchController = new SearchController()


/* Config */
app.set('view engine', 'pug')
app.set('views', './templates')
app.use(express.static('public'))

app.use(session({ secret: "cats" }));
app.use(bodyParser.urlencoded({ extended: false }));


app.use(flash());

passport.use(getAuthStrategy())
passport.serializeUser(serializeUser);
passport.deserializeUser(deserializeUser);

app.use(passport.initialize())
app.use(passport.session())

/* Routes */
const controllers = [
  siteController,
  searchController
];

/* Middleware */
app.use(function (req, res, next) {
  // console.log(req.body);
  next();
});

controllers.forEach(controller => {
  let routes = controller.getRoutes()

  let router = express.Router()
  routes.forEach(route=> {
    if ( route.auth ) {
      router[route.httpMethod](route.url, AuthedMiddleware, route.callback);
    } else {
      router[route.httpMethod](route.url, route.callback);
    }
  });
  app.use('/', router)
})

app.post('/login', 
  passport.authenticate('local', { successRedirect: '/', failureRedirect: '/search', failureFlash: false })
);

app.listen(4000, () => {
  console.log("Listening on port 4000")
})