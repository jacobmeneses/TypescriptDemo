import { Project } from '../models'

interface FindAllFunc {
    (): Array<Project>
}
export interface ProjectsRepository{
    findAll: FindAllFunc
}