import * as Sequelize from 'sequelize'
import { sequelize } from '../instances/sequelize'

export interface SightingAddModel {
    bear_type: string
    notes: string
    zip_code: number
    num_bears: number
}

export interface SightingModel extends Sequelize.Model<SightingModel, SightingAddModel> {
    id: number
    createdAt: string
}

export interface SightingViewModel {
    id: number
    start_date: string
    end_date: string
    bear_type: string
    zip_code: number
    sort: string
}

export const Sighting = sequelize.define<SightingModel, SightingModel>('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    
});