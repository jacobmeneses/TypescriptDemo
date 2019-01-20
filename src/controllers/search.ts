import {Request, Response } from 'express'
import { BaseController } from '../common/base-controller'
import { ProjectsRepositoryImpl } from '../repository/projects-repository-impl';

export class SearchController extends BaseController {

    public baseUrl: string

    constructor() {
        super()

        this.setRoutes([{ 
            url: '/search',
            httpMethod: 'get',
            callback: this.search
        }, { 
            url: '/search-authed',
            httpMethod: 'get',
            callback: this.searchAuthed,
            auth: true
        }])
    }

    public async search(req: Request, res: Response){
        let repository = new ProjectsRepositoryImpl()
        let values = await repository.findAll()

        res.render('search/search', { title: 'Hey', values })
    }

    public async searchAuthed(req: Request, res: Response, next: any){
        console.log('search authed method called');
        let repository = new ProjectsRepositoryImpl()
        let values = await repository.findAll()

        return res.render('search/search-authed', { title: 'Hey', values })
    }
}