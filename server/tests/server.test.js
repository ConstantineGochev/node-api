const expect = require('expect');
const request = require('supertest')

const {app} = require(('./../server'));

const {Charter} = require('./../models/charter');

describe('POST /charters', ()=>{
    it('should create new charter',(done)=>{
        var model = 'test charter model'
    })
})