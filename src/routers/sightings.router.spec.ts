// src/controllers/sightings.controller.spec.ts

import { default as app } from '../index'
import * as chai from 'chai'
//import chaiHttp = require('chai-http')
//chai.use(chaiHttp)
import * as request from 'supertest'


import 'mocha'

import { expect } from 'chai'
import * as sinon from 'sinon'
import * as Sequelize from 'sequelize'
import { Request, Response, Express } from 'express'
import { sightingsRouter } from '../routers/sightings.router'
import { Sighting } from '../models/sighting.models'
import { doesNotReject } from 'assert';

//export const createSighting = (req: Request, res: Response) => {
//    res.
//}

const sighting_simple = { 
    bear_type: 'grizzly', 
    notes: 'It was a big one!', 
    zip_code: '90210', 
    num_bears: 3 
}

export const createSighting = (req: Request, res: Response) => {
    res.send(sighting_simple)
}


describe('Sightings Routes', function() {
    describe('Creation', async function() {
        /**
         * GET /sighting/:id
         * Return a single sighting object queried by its ID
         */


        it('Should error out with empty body', async () => {
            return await request(app)
                .post('/sighting')
                .send({})
                .set('Accept', 'application/json')
                .expect(404)
        })

    })



    /**
     * GET /sighting/search
     * Return an array of sightings, include a unique ID with each. 
     * Supported query params: [All Optional] 
     *      start_date (inclusive) (default: all time) 
     *      end_date (inclusive) (default: all time) 
     *      bear_type (default: all types) 
     *      zip_code (default: all zip codes) 
     *      sort (default: created timestamp, ascending. only supported value is num_bears)
     */
     
})
