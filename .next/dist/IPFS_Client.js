'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _buffer = require('buffer');

var ipfsAPI = require('ipfs-api');
var ipfs = ipfsAPI('ipfs.infura.io', '5001', { protocol: 'https' });

exports.default = function (fileBuffer) {
    console.log("CALL ->" + _buffer.Buffer.isBuffer(fileBuffer));
    // let testBuff = toBuffer(fileBuffer);
    // console.log(Buffer.isBuffer(testBuff));
    ipfs.files.add(fileBuffer, function (err, file) {
        console.log("CHECK NOW");
        if (err) {
            console.log("ERROOORRR!!!");
            console.log(err);
            return err;
        } else {
            console.log("SENT!!!!");
            return file[0].hash;
        }
    });
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIklQRlNfQ2xpZW50LmpzIl0sIm5hbWVzIjpbIkJ1ZmZlciIsImlwZnNBUEkiLCJyZXF1aXJlIiwiaXBmcyIsInByb3RvY29sIiwiZmlsZUJ1ZmZlciIsImNvbnNvbGUiLCJsb2ciLCJpc0J1ZmZlciIsImZpbGVzIiwiYWRkIiwiZXJyIiwiZmlsZSIsImhhc2giXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQVMsQUFBVDs7QUFFQSxJQUFNLFVBQVUsQUFBVixBQUFOO0FBQ0EsSUFBTSxPQUFPLFFBQVEsQUFBUixrQkFBMEIsQUFBMUIsUUFBa0MsRUFBQyxVQUFVLEFBQVgsQUFBbEMsQUFBYixBQUVBOztrQkFBZSxVQUFDLEFBQUQsWUFBaUIsQUFDNUI7WUFBUSxBQUFSLElBQVksWUFBVSxlQUFPLEFBQVAsU0FBZ0IsQUFBaEIsQUFBdEIsQUFDQTtBQUNBO0FBQ0E7U0FBSyxBQUFMLE1BQVcsQUFBWCxJQUFlLEFBQWYsWUFBMkIsVUFBUyxBQUFULEtBQWEsQUFBYixNQUFrQixBQUN6QztnQkFBUSxBQUFSLElBQVksQUFBWixBQUNBO1lBQUcsQUFBSCxLQUFPLEFBQ0g7b0JBQVEsQUFBUixJQUFZLEFBQVosQUFDQTtvQkFBUSxBQUFSLElBQVksQUFBWixBQUNBO21CQUFPLEFBQVAsQUFDSDtBQUpELGVBS0ksQUFDQTtvQkFBUSxBQUFSLElBQVksQUFBWixBQUNBO21CQUFPLEtBQUssQUFBTCxHQUFRLEFBQWYsQUFDSDtBQUNKO0FBWEQsQUFZSDtBQWhCRDs7QUFzQkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiSVBGU19DbGllbnQuanMiLCJzb3VyY2VSb290IjoiL2hvbWUveWFjaGludC9ERVBBX1JlYWN0In0=