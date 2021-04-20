
const net = require('net')
const fs = require('fs');
const { type } = require('os');
const P = 4000;
const {postCallDetails} = require('./app/util/helper')



const server = net.createServer() //create server

server.on('connection', function(socket){                 // socket is an object and an instance
  console.log('A new connection has been established')
 let remoteAddress = socket.remotePort + ":" + socket.remoteAddress
 console.log(remoteAddress)

     socket.on('data',(data)=>{    // call details data from the csv file
    let chunk = data.toString('utf8')  // convert the dataset to utf8
    let splitString= chunk.split("\r\n")   //split the string at the break point
    let objKey ;              //init a variable call it the key in the key- value pairs
    let objVal;                     //init a variable call it the value in the key- value pairs
    objKey = splitString[0]
    objVal = splitString[1];
   let splitObjKey = objKey.split(',')    // split it at the comma separation
   let splitObjVal = objVal.split(',') 
      
     function convertStringToObject(){       
        let currentKey;         // initiate  another key in the value pairs 
        let currentVal;         // init another value in the key-value pairs
        let result = {}         // create an object
        for (let i = 0; i<=splitObjKey.length; i++){  
            
            currentVal = splitObjVal[i];
            currentKey= splitObjKey[i];
            result[currentKey] = currentVal;
            if(splitObjKey[i] == 'Date')  {
                return result
            }
         }
        //  console.log(result);
     }

     let cdrObj = convertStringToObject(splitObjKey, splitObjVal) // convert calldetails strings to object 
    //    console.log(cdrObj.Call_Id, cdrObj) 

       postCallDetails(cdrObj, cdrObj.Call_Id)
               

        })   
     
})

server.listen(P, (error)=>{
    if(error){
        console.log('error in listening on port ' + P)
    }else {
        console.log(`PORT ${P} is live and running`)
    }
})


// module.exports = {
//     postCdr
// }