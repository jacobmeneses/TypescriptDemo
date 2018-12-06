import {ProjectsRepository} from './projects-repository'
import { Project } from '../models/index';

import { Client, ClientConfig } from 'pg';
import { throwStatement } from 'babel-types';

export class ProjectsRepositoryImpl implements ProjectsRepository{
    private client: Client

    constructor() {
        let clientConfig : ClientConfig = {
            user: 'postgres',
            database: 'postgres',
            password: 'example',
            port: 4003,
            host: '127.0.0.1',
            ssl: false
        }

        this.client = new Client(clientConfig);
    }

    async findAll() {
        await this.client.connect()
        let result = await this.client.query("SELECT * from projects")
        console.log(result.rows)

        let value = new Array<Project>()

        result.rows.forEach(element => {
            value.push(element)
        })

        return value;
    }
}