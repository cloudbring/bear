import * as Sequelize from 'sequelize'
import { sequelize } from '../instances/sequelize'


export interface SightingAddModel {
    id: number,
    bear_type: string
    notes: string
    zip_code: number
    num_bears: number
}

export interface SightingModel extends Sequelize.Model<SightingModel, SightingAddModel> {
    id: number
}

export interface SightingViewModel {
    id: number
}

export interface SightingSearchModel {
    id: number
    start_date: string
    end_date: string
    bear_type: string
    zip_code: number
    sort: string
}
    /**
     * Bear Types[1]:
     * - Asiatic Bear.
     * - Black Bear.
     * - Brown Bear.
     * - Giant Panda.
     * - Polar Bear.
     * - Sloth Bear.
     * - Spectacled Bear.
     * - Sun Bear.
     * 
     * [1]: https://www.kidzone.ws/lw/bears/facts09.htm
     */
export const bear_types = [
    'Asiatic',
    'Black',
    'Brown',
    'Giant Panda',
    'Polar',
    'Sloth',
    'Spectacled',
    'Sun'
]

export const Sighting = sequelize.define<SightingModel, SightingAddModel>('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    bear_type: Sequelize.ENUM(bear_types),
    zip_code: Sequelize.INTEGER,
    notes: Sequelize.TEXT,
    num_bears: Sequelize.TEXT
});