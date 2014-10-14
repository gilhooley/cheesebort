
// YELP AUTH
var yelp = require("../node_modules/yelp/index").createClient({
  consumer_key: "aLyBiK_4T_V3GvoI-Wy__g", 
  consumer_secret: "H9PZJkI40Ee7Br1iH63muixL1B0",
  token: "2FpEW8sOZr9CG2hcmssrrBvXnVoWdGB8",
  token_secret: "rsYmo7TFkAG1xEFV1w76cGJzDf4"
});


var gimme = function (latitude, longitude) {
  
  yelp.search({
    term: "mac & cheese", 
    location: "San Francisco", 
    cll: [latitude,longitude] 
  }, function(error, data) {
      if (error) { console.log(error); }
      else { console.log(data.name); }
    });

};

// LOCATE USER
var locatable = function(){
  if ("geolocation" in navigator) { return true; } 
  else { return false; }  
};

// SEND CHEEZ INFO FROM YELP BACK TO USER
var render = function(results){

  document.getElementById('results').innerHTML = results;

  // build out with formatting
};

// SEND USER'S LOCATION TO YELP ie make GET request
// var getCheez = function(latitude, longitude){

//   // return array of objects
//   gimme(latitude, longitude);

// };



var locate = function(canLocate){
  if (canLocate) {
    // locate user
    navigator.geolocation.getCurrentPosition(function(position) {
      gimme(position.coords.latitude, position.coords.longitude);
    });
  } else {
    // register my disappointment
    console.error('Please turn on geolocation.')
    document.getElementById('results').innerHTML = '<p>Please turn on geolocation.</p>';
  }
};


var canLocate = locatable();
//locate(canLocate);


