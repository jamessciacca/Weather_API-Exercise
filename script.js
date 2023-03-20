//Make a request to the open weather map API for the current local weather
var baseURL = 'https://api.openweathermap.org/data/2.5'
var apiKey = 'fd91f2afeb136edd367f1401e1aefc53'
// var lat = '40.3526'
// var lon = '-74.4402'
var url = (baseURL + '/weather?appid=' + apiKey)

function getLocation() {

    navigator.geolocation.getCurrentPosition(function (locationData) {
      // console.log(locationData.coords.latitude);
      // Make a request to the Open Weather Map API for the current local weather
      $.get(url + '&lat=' + locationData.coords.latitude + '&lon=' + locationData.coords.longitude).then(function (data) {
        console.log(data);
      });
    });
  }
  
  getLocation();

  function getWeatherByCity(){
    $.get(url + '&q=holmdel').then(function (data){
        console.log(data);
    });
  }

  getWeatherByCity();




// function someFunc (){
//     return{
//         name: 'James',
//         age: 19
//     }
// }

// console.log(someFunc());








//show the data on the page