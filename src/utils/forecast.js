const request = require('postman-request');
const forecast=(latitude,longitude,callback)=>{
    const url=`http://api.weatherstack.com/current?access_key=d560ed0904adadcbbe000be11fd2105d&query=${latitude},${longitude}`;
    request({url,json:true},(error,{body}={})=>{
        if(error){
            callback('Unable to connect to weather services',undefined)
        }else if(body.error){
            callback('Unable to find the location.',undefined)
        }else{
            const temp = body.current.temperature;
            const feels_like = body.current.feelslike;
            callback(undefined,{
                weather:body.current.weather_descriptions[0],
                temperature:`. It is currently ${temp} degrees out. It feels like ${feels_like} degrees out.`,
                wind_speed:body.current.wind_speed,
                humidity:body.current.humidity
            })
        }
    })
}
module.exports = forecast;