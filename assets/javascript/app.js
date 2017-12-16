/*
How it should work
!!!--- Weather API ---!!!

-User enters their desired zip code in input field
API Call Example: api.openweathermap.org/data/2.5/weather?zip={zip code}
-User clicks submit button
-App makes AJAX call to API for information
-App obtains current weather information for desired zip code 
-App displays current weather conditions on page including:
	^weather.description (weather description)
	^main.temp (temperature)
-When weather API response is received, response is compared against conditions to be met to establish a value
-App stores response value

!!!--- Music API ---!!!

YouTube API Key ==========>  AIzaSyAK4v45I2JEwBV4XuTQml9Vlqx7zVYynak

-AJAX call is made to music API for playlist associated with "weather.main" value
-App obtains the playlist and displays it on the page
*/
    
/* OPTION 1  This is a better option for when you have multiple clicks

    // $(document).ready(function() {
    //   //onclick event
    //   $("#sub-btn").on("click", function(event) {

    //     event.preventDefault();
    //     console.log("clicked submit");
    //     //Current Zip Code Variable
    //     var zipInput = $("#zip").val().trim();
        
    //     // This is the URL we need to query the openweathermap database
    //     var weatherURL = "https://api.openweathermap.org/data/2.5/weather?zip=" + zipInput +
    //     ",us&units=imperial&appid=3413b3e1da8ab7799aca6d371de17aa6";

    //     // Our AJAX call
    //     $.ajax({
    //     url: weatherURL,
    //     method: "GET"
    //     }).done(function(response) {

    //       var results = response.data;
        
    //     // Console Log the weatherURL to check it
    //     console.log(weatherURL);
    //     // Console log of the resulting database response object
    //     console.log(results);
        
    //     });
     
    //   });
    // });
*/   

    //onclick event
    $(document).on("click", "#sub-btn", function(event) {

      event.preventDefault();
      
      //Current Zip Code Variable
      var zipInput = $("#zip").val().trim();
      
      // This is the URL we need to query the openweathermap database
      var weatherURL = "https://api.openweathermap.org/data/2.5/weather?zip=" + zipInput +
      ",us&units=imperial&appid=3413b3e1da8ab7799aca6d371de17aa6";

      // Our AJAX call
      $.ajax({
      url: weatherURL,
      method: "GET"
      }).done(function(response) {
      
      // Console Log the weatherURL to check it
      console.log(weatherURL);
      // Console log of the resulting database response object
      console.log(response);

      $(".city").text("Location: " + response.name);
      $(".temperature").text("Temperature (F): " + response.main.temp);
      $(".weather").text("What to expect: " + response.weather[0].description);
      
      });
     
    });