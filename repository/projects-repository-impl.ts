import {ProjectsRepository} from './projects-repository'
import { Project } from '../models';

export class ProjectsRepositoryImpl implements ProjectsRepository{

    findAll(){
        return [
           new Project() 
        ]
    }
}