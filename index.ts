import * as express from "express"
import {Request, Response } from "express"

import {SiteController} from './controllers/site'
import {SearchController} from './controllers/search'

const siteController = new SiteController()
const searchController = new SearchController()

var app = express()

/* Config */
app.set('view engine', 'pug')
app.set('views', './templates')

/* Routes */
const controllers = [
  siteController,
  searchController
];

controllers.forEach(controller => {
  controller.routes.forEach(route=> {
    app[route.httpMethod](route.url, route.callback)
  });
})


app.listen(4000, () => {
  console.log("Listening on port 4000")
})