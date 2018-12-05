
// class MyRoute {
//     public url: string
//     public httpMethod: string 
//     public callback: any
// }
import {Request, Response } from "express"

export class SiteController {
    public routes: Array<any>

    constructor() {
        this.routes = [{ 
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
            url: '/register',
            httpMethod: 'get',
            callback: this.register
        }]
    }

    public index(req: Request, res: Response){
        res.render('home/index', { title: 'Hey', message: 'its the index!' })
    }

    public register(req: Request, res: Response){
        res.render('home/index', { title: 'Hey', message: 'its the register!' })
    }

    public login(req: Request, res: Response){
        res.render('home/index', { title: 'Hey', message: 'its the login!' })
    }
}