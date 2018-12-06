import {ProjectsRepository} from './projects-repository'
import { Project } from '../models/index';

export class ProjectsRepositoryImpl implements ProjectsRepository{

    findAll(){
        return [
           new Project() 
        ]
    }
}