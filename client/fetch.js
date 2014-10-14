
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

  document.getElementById('results').innerHTML = 

// LOL
  '<a href="' + results[0].url + '">' + 
    '<h2>' + results[0].name + '</h2>' + 
    '</a>' +
  '<p>' + results[0].location.display_address[0] + '</p>' +
  '<img src="' + results[0].image_url + '"/>' +

  '<a href="' + results[1].url + '">' + 
    '<h2>' + results[1].name + '</h2>' +
    '</a>' +
  '<p>' + results[1].location.display_address[0] + '</p>' +
  '<img src="' + results[1].image_url + '"/>' +


  '<a href="' + results[2].url + '">' + 
    '<h2>' + results[2].name + '</h2>' +
    '</a>' +
  '<p>' + results[2].location.display_address[0] + '</p>' +
  '<img src="' + results[2].image_url + '"/>' +


  '<a href="' + results[3].url + '">' + 
    '<h2>' + results[3].name + '</h2>' +
    '</a>' +
  '<p>' + results[3].location.display_address[0] + '</p>' +
  '<img src="' + results[3].image_url + '"/>' +


  '<a href="' + results[4].url + '">' + 
    '<h2>' + results[4].name + '</h2>' +
    '</a>' +
  '<p>' + results[4].location.display_address[0] + '</p>' +
  '<img src="' + results[4].image_url + '"/>' 

  ;
  
};

var callMe = function(){
  $.when(locate(locatable()))
  .pipe(setParams)
  .then(yelpAuth);
};



