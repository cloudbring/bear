// src/services/sightings.service.ts

//import * as bcrypt from 'bcrypt'
//import * as jwt from 'jsonwebtoken'
import * as Bluebird from 'Bluebird'
import { Sighting, SightingModel, SightingAddModel, SightingViewModel } from '../models/sighting.models'

export class SightingService {
    static get SightingAttributes() {
        return ['id']
    }
    private static _sighting
    static get sighting() {
        return SightingService._sighting
    }

    getSightingById(id: number) {
        return Sighting.findById(id, {
            attributes: SightingService.SightingAttributes
        }) as Bluebird<SightingViewModel>
    }

    createSighting({ id, bear_type, notes, zip_code, num_bears }: SightingAddModel) {
        return Sighting.create({ id, bear_type, notes, zip_code, num_bears })
            .then(s => this.getSightingById(s!.id))
    }
}