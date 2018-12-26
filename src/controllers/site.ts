import {Request, Response } from 'express'
import { BaseController } from '../common/base-controller'

export class SiteController extends BaseController {

    constructor() {
        super()

        this.setRoutes([{ 
            url: '/',
            httpMethod: 'get',
            callback: this.index
        },
        { 
            url: '/login',
            httpMethod: 'get',
            callback: this.login
        },
        { 
            url: '/signup',
            httpMethod: 'get',
            callback: this.signup
        }])
    }

    public index(req: Request, res: Response){
        res.render('home/index', { title: 'Hey', message: 'its the index!' })
    }

    public login(req: Request, res: Response){
        res.render('login/login')
    }

    public signup(req: Request, res: Response){
        res.render('signup/signup')
    }
}