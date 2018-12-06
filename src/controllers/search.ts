import {Request, Response } from 'express'
import { BaseController } from '../common/base-controller'
import { ProjectsRepositoryImpl } from '../repository/projects-repository-impl';

export class SearchController extends BaseController {

    constructor() {
        super()

        this.setRoutes([{ 
            url: '/search',
            httpMethod: 'get',
            callback: this.search
        }])
    }

    public async search(req: Request, res: Response){
        let repository = new ProjectsRepositoryImpl()
        let values = await repository.findAll()

        res.render('search/search', { title: 'Hey', message: 'its the search!', values })
    }
}