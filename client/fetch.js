
// rule user in/out
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
     // jQ promise to handle early return issue    
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

// render results onto page
var render = function(results){
  var inhtml = [];

  for (var i = 0; i < 6; i++){
   inhtml.push(
    '<a href="' + results[i].url + '">' + 
      '<h2>' + results[i].name + '</h2>' + 
    '</a>' +
    '<p>' + results[i].location.display_address[0] + '</p>' +
    '<img src="' + results[i].image_url + '"/>')
  };

  document.getElementById('results').innerHTML = inhtml;
};

var callMe = function(){
  $.when(locate(locatable()))
  .pipe(setParams)
  .then(yelpAuth);
};



