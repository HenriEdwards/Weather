$(document).ready(function(){
  // Function displayed retireved weather data
  const showData = (data) => {

    // Set pta weather data
    $('.pta-temp').text('Temperature: ' + data[0].current.temperature_2m + '°C');
    $('.pta-wind-speed').text('Wind Speed: ' + data[0].current.wind_speed_10m + 'Km/h');
    $('.pta-cloud-cover').text('Cloud Cover: ' + data[0].current.cloud_cover + '%');
    $('.pta-rain').text('Rain: ' + data[0].current.rain + ' mm');
    $('.pta-precip').text('Precipitation: ' + data[0].current.precipitation + ' mm');
    $('.pta-humidity').text('Humidity: ' + data[0].current.relative_humidity_2m + '%');

    // Set jhb weather data
    $('.jhb-temp').text('Temperature: ' + data[1].current.temperature_2m + '°C');
    $('.jhb-wind-speed').text('Wind Speed: ' + data[1].current.wind_speed_10m + 'Km/h');
    $('.jhb-cloud-cover').text('Cloud Cover: ' + data[1].current.cloud_cover + '%');
    $('.jhb-rain').text('Rain: ' + data[1].current.rain + ' mm');
    $('.jhb-precip').text('Precipitation: ' + data[1].current.precipitation + ' mm');
    $('.jhb-humidity').text('Humidity: ' + data[1].current.relative_humidity_2m + '%');


    // Set cape town weather data
    $('.ct-temp').text('Temperature: ' + data[2].current.temperature_2m + '°C');
    $('.ct-wind-speed').text('Wind Speed: ' + data[2].current.wind_speed_10m + 'Km/h');
    $('.ct-cloud-cover').text('Cloud Cover: ' + data[2].current.cloud_cover + '%');
    $('.ct-rain').text('Rain: ' + data[2].current.rain + ' mm');
    $('.ct-precip').text('Precipitation: ' + data[2].current.precipitation + ' mm');
    $('.ct-humidity').text('Humidity: ' + data[2].current.relative_humidity_2m + '%');


    // Set soweto weather data
    $('.soweto-temp').text('Temperature: ' + data[3].current.temperature_2m + '°C');
    $('.soweto-wind-speed').text('Wind Speed: ' + data[3].current.wind_speed_10m + 'Km/h');
    $('.soweto-cloud-cover').text('Cloud Cover: ' + data[3].current.cloud_cover + '%');
    $('.soweto-rain').text('Rain: ' + data[3].current.rain + ' mm');
    $('.soweto-precip').text('Precipitation: ' + data[3].current.precipitation + ' mm');
    $('.soweto-humidity').text('Humidity: ' + data[3].current.relative_humidity_2m + '%');

    // Set durban weather data
    $('.durban-temp').text('Temperature: ' + data[4].current.temperature_2m + '°C');
    $('.durban-wind-speed').text('Wind Speed: ' + data[4].current.wind_speed_10m + 'Km/h');
    $('.durban-cloud-cover').text('Cloud Cover: ' + data[4].current.cloud_cover + '%');
    $('.durban-rain').text('Rain: ' + data[4].current.rain + ' mm');
    $('.durban-precip').text('Precipitation: ' + data[4].current.precipitation + ' mm');
    $('.durban-humidity').text('Humidity: ' + data[4].current.relative_humidity_2m + '%');
  };

  // Request city weather
  $.ajax({
    // Retrieves weather data for, pretoria / jhb / cape town / soweto and durban, in that order.
    // More on this API - https://open-meteo.com/en/docs
    url: 'https://api.open-meteo.com/v1/forecast?latitude=-25.73134,-26.195246,-33.9258,-26.266111,-29.883333&longitude=28.21837,28.034088,18.4232,27.865833,31.049999&current=temperature_2m,relative_humidity_2m,is_day,precipitation,rain,showers,cloud_cover,wind_speed_10m&daily=uv_index_max&timezone=auto&forecast_hours=1',
    type: 'GET',
    dataType: 'json',
    success: function(data) {
      // Call function to update DOM
      console.log('Data retreived, populating DOM...')
      showData(data);
    },
    error: function () {
      console.log('Error retrieving data...')
    }
  });
});