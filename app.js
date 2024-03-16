

var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');
var name = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');

button.addEventListener('click', function(){
    //var apiKey = '71688fdf06bb7507d22d9420711f645b'; // Replace 'YOUR_API_KEY' with your actual API key
    var cityName = inputValue.value;

    // Assuming the API endpoint expects the city name as part of the query
    //var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

    

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {

            let temperatureKelvin = data.main.temp;
            let temperatureCelsius = temperatureKelvin - 273.15;
        

            // Update the 'name', 'desc', 'temp' elements with data from the API response
            name.textContent = data.name;
            desc.textContent = data.weather[0].description;
            temp.textContent = temperatureCelsius.toFixed(2) + "°C";


            /*

            var weatherDescription = data.weather[0].main.toLowerCase();
            var imageUrl = getImageForWeather(weatherDescription);
            weatherImage.src = imageUrl;

            */


        })
        .catch(err => {
            console.error('Error fetching data:', err);
            alert("Incorrect City Name");
        });
});


/*

function getImageForWeather(weatherDescription){

    var imageMap = {
        'Overcast': 'url_for_overcast clouds_weather_overcast.png',
        'Rain': 'url_for_rain_rain.png',
        'Snow': 'url_for_snow_snow.png',
    };

    return imageMap[weatherDescription] || 'default_image_overcast.png';

}


*/
