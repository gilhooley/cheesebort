
// set up yelp authentication
var yelpAuth = function(){ // location
  var auth = {
    // bad idea, but
    consumerKey: "aLyBiK_4T_V3GvoI-Wy__g", 
    consumerSecret: "H9PZJkI40Ee7Br1iH63muixL1B0",
    accessToken: "2FpEW8sOZr9CG2hcmssrrBvXnVoWdGB8",
    accessTokenSecret: "rsYmo7TFkAG1xEFV1w76cGJzDf4"
    // serviceProvider: { 
    //   signatureMethod: "HMAC-SHA1"
    // }
  };

  var accessor = {
    consumerSecret: auth.consumerSecret,
    tokenSecret: auth.accessTokenSecret
  };

  // set params for get request
  var terms = 'mac+&+cheese';
  location.latitude.toString();
  location.longitude.toString();
  var near = location.latitude + ',' + location.longitude;
  // var near = '37.7835480,-122.4089530';

  parameters = [];
  parameters.push(['term', terms]);
  // return only the closest 6 results
  parameters.push(['limit', 6]);
  // sort by distance
  parameters.push(['sort', 1]);
  // inject user's longitude/latitude
  parameters.push(['ll', near]);
  parameters.push(['callback', 'cb']);
  // auth
  parameters.push(['oauth_consumer_key', auth.consumerKey]);
  parameters.push(['oauth_consumer_secret', auth.consumerSecret]);
  parameters.push(['oauth_token', auth.accessToken]);
  parameters.push(['oauth_signature_method', 'HMAC-SHA1']);

  var message = { 
    'action': 'http://api.yelp.com/v2/search',
    'method': 'GET',
    'parameters': parameters 
  };

  OAuth.setTimestampAndNonce(message);
  OAuth.SignatureMethod.sign(message, accessor);

  var parameterMap = OAuth.getParameterMap(message.parameters);
  parameterMap.oauth_signature = OAuth.percentEncode(parameterMap.oauth_signature);
  console.log(parameterMap);

  // get request
  $.ajax({
    'url': message.action,
    'data': parameterMap,
    'method': message.method,
    'cache': true,
    'dataType': 'jsonp',
    'jsonpCallback': 'cb',
    'success': function(data, textStats, XMLHttpRequest) {
      console.log(data.businesses);
      render(data.businesses);
    },
    'error': function(error){
      console.log('get request failed: ', error);
    }
});

};


var fetch = function(){
  // var userLocation = locate(canLocate);
  // if (userLocation !== undefined){
  //   yelpAuth(userLocation);
  // } else {
  //   console.log('location not found');
  //   document.getElementById('results').innerHTML = '<p>Please turn on geolocation.</p>';
  // } 
  // yelpAuth(); 
};


