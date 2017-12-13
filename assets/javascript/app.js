/*
How it should work
-User enters their desired zip code in input field
API Call Example: api.openweathermap.org/data/2.5/weather?zip={zip code}
-User clicks submit button
-App makes AJAX call to API for information
-App obtains current weather information for desired zip code 
-App displays current weather conditions on page including:
	^weather.value (weather name)
	^temperature.value (temperature)
	^temperature.unit=imperial (Temperature Unit of measurement Fahrenheit)
-
*/

	// This is the API key.
    var APIKey = "a6430856a01a213e7e44f9a6de2db019";

    // This is the URL we need to query the openweathermap database
    var weatherURL = "https://api.openweathermap.org/data/2.5/weather?zip=" + zipCaptured + ",Burundi&appid=" + APIKey;

    // Our AJAX call
    $.ajax({
      url: weatherURL,
      method: "GET"
    }).done(function(response) {

      // Console Log the weatherURL to check it
      console.log(weatherURL);
      // Console log of the resulting database response object
      console.log(response);

    });


