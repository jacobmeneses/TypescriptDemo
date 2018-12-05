import {Request, Response } from 'express'
import { ControllerConfig } from '../common/controller-config'

export class SearchController {
    public routes: Array<ControllerConfig>

    constructor() {
        this.routes = [{ 
            url: '/search',
            httpMethod: 'get',
            callback: this.search
        }]
    }

    public search(req: Request, res: Response){
        res.render('search/search', { title: 'Hey', message: 'its the search!' })
    }
}