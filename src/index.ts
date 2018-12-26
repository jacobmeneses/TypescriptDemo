import * as express from "express"
import {SiteController} from './controllers/site'
import {SearchController} from './controllers/search'
import { networkInterfaces } from "os";

var app = express()

const siteController = new SiteController()
const searchController = new SearchController()

/* Config */
app.set('view engine', 'pug')
app.set('views', './templates')
app.use(express.static('public'))

/* Routes */
const controllers = [
  siteController,
  searchController
];

/* Middleware */
app.use(function (req, res, next) {
  console.log(req.body);
  next();
});

controllers.forEach(controller => {
  let routes = controller.getRoutes()

  routes.forEach(route=> {
    app[route.httpMethod](route.url, route.callback)
  });
})

app.listen(4000, () => {
  console.log("Listening on port 4000")
})