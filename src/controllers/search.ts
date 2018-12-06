import {Request, Response } from 'express'
import { BaseController } from '../common/base-controller'

export class SearchController extends BaseController {

    constructor() {
        super()

        this.setRoutes([{ 
            url: '/search',
            httpMethod: 'get',
            callback: this.search
        }])
    }

    public search(req: Request, res: Response){
        res.render('search/search', { title: 'Hey', message: 'its the search!' })
    }
}