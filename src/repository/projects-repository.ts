import { Project } from '../models/index'

interface FindAllFunc {
    (): Promise<Array<Project>>
}
export interface ProjectsRepository{
    findAll: FindAllFunc
}