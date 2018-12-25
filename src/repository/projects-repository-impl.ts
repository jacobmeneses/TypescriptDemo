import {ProjectsRepository} from './projects-repository'
import { Project } from '../models/index';

import { Client, ClientConfig } from 'pg';
import * as fs from 'fs';
import * as path from 'path';
import { throwStatement } from 'babel-types';

export class ProjectsRepositoryImpl implements ProjectsRepository{
    private client: Client

    constructor() {
        let filepath = path.join(path.dirname(fs.realpathSync(__filename)), '../config/development.json');
        var config = JSON.parse(fs.readFileSync(filepath, 'utf8'))
        let clientConfig : ClientConfig = config
        this.client = new Client(clientConfig)
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