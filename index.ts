import * as express from "express"
import {Request, Response } from "express"

import {SiteController} from './controllers/site'

const siteController = new SiteController()

var app = express()

/* Config */
app.set('view engine', 'pug')
app.set('views', './templates')

/* Routes */
siteController.routes.forEach(route=> {
  app[route.httpMethod](route.url, route.callback)
});


app.listen(4000, () => {
  console.log("Listening on port 4000")
})