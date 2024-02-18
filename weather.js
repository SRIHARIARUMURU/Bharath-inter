function getWeather() {
    const apiKey = 'YOUR_API_KEY'; // Replace with your API key
    const city = document.getElementById('city').value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        const weatherData = `
          <h2>${data.name}, ${data.sys.country}</h2>
          <p>Temperature: ${data.main.temp}°C</p>
          <p>Description: ${data.weather[0].description}</p>
          <p>Humidity: ${data.main.humidity}%</p>
          <p>Wind Speed: ${data.wind.speed} m/s</p>
        `;
        document.getElementById('weather-data').innerHTML = weatherData;
      })
      .catch(error => {
        console.error('There was a problem fetching the weather data:', error);
        document.getElementById('weather-data').innerHTML = 'Error fetching weather data. Please try again.';
      });
}
