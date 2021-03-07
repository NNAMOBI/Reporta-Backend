"use strict";



const OrganizationRepository = require('./organizationRepository');
const {
    errorResponse,
    successResponse
} = require('../util/helper')




exports.createOrganization = async (data, id) => {

    try {
        let {
        companyName,
        email,
        password,
        phoneNo,
        address
        } = data
        // let randomChar = await randomString.generateString();
        // let hashedPassword = await hashString.hashPassword(randomChar)
        // let password = hashedPassword
        const organizationRecord = await OrganizationRepository.create({
            companyName,
            email,
            password,
            phoneNo,
            address,
            id
        })
        return organizationRecord;
    } catch (err) {
        console.log("error", err)
        return err
    }


}