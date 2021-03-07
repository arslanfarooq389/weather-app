const weatherForm = document.querySelector('form');
const search = document.querySelector('input');

const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const messageThree = document.querySelector('#message-3')

weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    messageOne.textContent = 'Loading...';
    messageTwo.textContent = '';
    const location = search.value;
        fetch(`/weather?address=${location}`).then((response)=>{
        response.json().then((data)=>{
            if(data.error){
                messageOne.textContent = data.error;
            }else{
                const humidity = data.forecast.humidity;
                const wind_speed = data.forecast.wind_speed;
                messageOne.textContent = data.location;
                messageTwo.textContent = data.forecast.weather;
                messageThree.textContent = `There is ${humidity} humidity and ${wind_speed} wind speed in ${data.location}`;
            }
        }) 
    })
})

