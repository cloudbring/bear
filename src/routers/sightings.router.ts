import { Router } from 'express'
import { matchedData } from 'express-validator/filter'
import { validationResult } from 'express-validator/check'
import { sightingsRules } from '../rules/sightings.rules'
import { SightingService } from '../services/sightings.service'
import { SightingAddModel } from '../models/sighting.models'

export const sightingsRouter = Router()
const sightingService = new SightingService()

/**
 * POST /sighting
 * Example POST body: { bear_type: 'grizzly', notes: 'It was a big one!', zip_code: '90210', num_bears: 3 }
 */
sightingsRouter.post('/sighting', sightingsRules['forCreate'], (req,res) => {
    const errors = validationResult(req)

    if(!errors.isEmpty())
        return res.status(422).json(errors.array());
    
    const payload = matchedData(req) as SightingAddModel
    const sighting = sightingService.createSighting(payload)

    return sighting.then(s => res.json(s))


})