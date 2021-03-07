const request = require('postman-request');
const geocode =(address,callback)=>{
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?limit=2&access_token=pk.eyJ1IjoiYXJzbGFuZmFyb29xMzg5IiwiYSI6ImNrbHBqMG0xNjEzOTcycG82ZnoxbzN1M2sifQ.HRvG3xCgaRw1DNh4A0o5oQ&limit=1`
    request({url,json:true},(error,{body}={})=>{
        if(error){
            callback('Unable to connect to location services.',undefined)
        }else if(body.features.length===0){
            callback('Unable to find location try another search.',undefined)
        }else{
            callback(undefined,{
                latitude : body.features[1].center[1],
                longitude : body.features[1].center[0],
                location : body.features[1].place_name
            })
         }
    })
}
module.exports = geocode;