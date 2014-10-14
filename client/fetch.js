
// LOCATE USER
var locatable = function(){
  if ("geolocation" in navigator) { return true; } 
  else { return false; }  
};

var locate = function(canLocate){
  var deferred = $.Deferred();
  var location = {
    latitude: 0,
    longitude: 0
  };

  if (canLocate) {
    // locate user
    navigator.geolocation.getCurrentPosition(       
        deferred.resolve,
        deferred.reject
        // options
        );
    return deferred.promise();
  } else {
    // register disappointment
    console.error('Please turn on geolocation.')
    document.getElementById('results').innerHTML = '<p>Please turn on geolocation.</p>';
    location = undefined;
    return location;
  }
};

var setParams = function(position){
  location.latitude = position.coords.latitude;
  location.longitude = position.coords.longitude;
  return location;
};

// SEND CHEEZ INFO FROM YELP BACK TO USER
var render = function(results){

  document.getElementById('results').innerText = results;

  // build out with formatting
};

var callMe = function(){
  $.when(locate(locatable()))
  .pipe(setParams)
  .then(yelpAuth);
};



