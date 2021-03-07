"use strict";

const organizationModel = require('../../models/organization').organization
const Repository = require('../util/Repository');




class OrganizationRepository extends Repository{
    constructor(){
       super(organizationModel)
    }
    
    
}



module.exports = (new OrganizationRepository());