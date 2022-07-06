axios = require('axios');

async function getPictureOfDay(){
    let json = await axios.get('https://api.nasa.gov/planetary/apod?api_key=3fPTuZT4DvRaLjA9F5mA95jHAIlnHIMDwd40WwVL');
    return json.data;
}

getPictureOfDay().then(result => {console.log(result)});