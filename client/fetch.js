
// check that user has geolocation enabled
var locatable = function(){
  if ("geolocation" in navigator) { return true; } 
  else { return false; }  
};

// locate user
var locate = function(canLocate){
  var deferred = $.Deferred();
  var location = {
    latitude: 0,
    longitude: 0
  };

  if (canLocate) {
    // use built-in geolocation
    navigator.geolocation.getCurrentPosition(   
     // jQ promise to handle early return issue    
        deferred.resolve,
        deferred.reject
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
    '<img src="' + results[i].image_url + '"/>' +
    '<a href="' + results[i].url + '">' + 
      '<h3>' + results[i].name + '</h3>' + 
    '</a>' +
    '<p>' + results[i].location.display_address[0] + '</p>')
  };

  document.getElementById('results').innerHTML = inhtml;
};

var callMe = function(){
  $.when(locate(locatable()))
  .pipe(setParams)
  .then(yelpAuth);
};


// test function (disable callMe & setParams,
// replace in index.html, use alternate definition 
// of var near in auth.js)
//
// var fetch = function(){
//   yelpAuth(); 
// };



