import { Project } from '../models/index'

interface FindAllFunc {
    (): Array<Project>
}
export interface ProjectsRepository{
    findAll: FindAllFunc
}