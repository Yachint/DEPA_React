import { Buffer } from 'buffer';

const ipfsAPI = require('ipfs-api');
const ipfs = ipfsAPI('ipfs.infura.io', '5001', {protocol: 'https'});

export default (fileBuffer) =>  {
    console.log("CALL ->"+Buffer.isBuffer(fileBuffer));
    // let testBuff = toBuffer(fileBuffer);
    // console.log(Buffer.isBuffer(testBuff));
    ipfs.files.add(fileBuffer, function(err,file){
        console.log("CHECK NOW");
        if(err){
            console.log("ERROOORRR!!!");
            console.log(err);
            return err;
        }
        else{
            console.log("SENT!!!!")
            return file[0].hash;
        }
    })
}





// const validCID = "QmZqtRXtgGWR6c7t8ZATDMoWxSV3jbLzyZazVo1cffsdb3";

// // ipfs.files.get(validCID, function(err, files){
// //      files.forEach((file) => {
// //          console.log(file.path);
// //      })   
// // })

// let urlPre= "https://gateway.ipfs.io/ipfs/"+validCID;

// // shortUrl.short(urlPre, function(err, url){
// //     console.log(url);
// // });

// const file = fs.createWriteStream("Downloaded.pdf");
// const request = https.get(urlPre, function(response){
//     response.pipe(file);
// })


