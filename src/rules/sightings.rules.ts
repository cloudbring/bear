// src/rules/sightings.rules

import { check } from 'express-validator/check'
import { Sighting, bear_types } from '../models/sighting.models'

const InvalidBearMsg = 
    `Invalid Bear Type. Must be one of these kinds of bears: [${bear_types.join(', ')}]`

export const sightingsRules = {
    forCreate: [
        check('bear_type')
            .isIn(bear_types).withMessage(InvalidBearMsg),
        check('notes')
            .exists({'checkFalsy': true})
            .withMessage('Missing Note: Must provide an account of the bear sighting'),
        check('zip_code')
            .exists({'checkFalsy': true})
            .isInt({min: 1000, max: 99999, allow_leading_zeroes: true})
            .withMessage('Invalid ZipCode: Must be a valid zipcode (leading zeros allowed)'),
        check('num_bears')
            .isInt({min: 1})
            .withMessage('Number of bears in a sighting must be at least one')
    ],
    forLookup: [
        check('id')
            .exists().withMessage('Id Missing: Must provide a sighting id')
            .isInt().withMessage('Bad Id: ID must be a number')
            .custom(id => Sighting.find({ where: { id } }).then(s => !!!s)).withMessage('Not Found: ID not found')
    ]
}