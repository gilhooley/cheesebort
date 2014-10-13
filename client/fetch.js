

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
var getCheez = function(latitude, longitude){

  render(latitude, longitude);
  // return array of objects
};



var locate = function(canLocate){
  if (canLocate) {
    // locate user
    navigator.geolocation.getCurrentPosition(function(position) {
      getCheez(position.coords.latitude, position.coords.longitude);
    });
  } else {
    // register my disappointment
    console.error('Please turn on geolocation.')
    document.getElementById('results').innerHTML = '<p>Please turn on geolocation.</p>';
  }
};




var canLocate = locatable();
//locate(canLocate);
