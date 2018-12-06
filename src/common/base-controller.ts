import {Request, Response } from 'express'
import { ControllerConfig } from './controller-config'

export class BaseController{
    private routes: Array<ControllerConfig>

    constructor() {
        this.routes = []        
    }

    setRoutes(routes) {
        this.routes = routes
    }

    getRoutes():Array<ControllerConfig>{
        return this.routes;
    }
}