'use strict'
/**
 * Name: NNAMDI OSUAGWU
 * StudentId: 1013007
 * CourseCode: CMM004
 * Course: Software Engineering Project
 * 
 */


/**
 * * importing libraries: - 1
 * function that handles all the errors in the app -2
 */

//-2
let successResponse = (res, data, code = 200) => {
    if ((data && data.docs)) {
        data.data = data.docs;
        delete data.docs;
        return res.status(code).json({data});
    }
    return res.status(code).json({data});
};


let errorResponse = (res, error = "Oops. An Error Occurred", code = 500) => { //-2
    return res.status(code).json({error: error});
};





module.exports = {
    successResponse,
    errorResponse
    
}