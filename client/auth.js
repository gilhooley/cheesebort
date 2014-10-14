
// set up yelp authentication
var yelpAuth = function(location){
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

  parameters = [];
  parameters.push(['term', terms]);
  parameters.push(['ll', near]);
  parameters.push(['callback', 'cb']);
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
  $.get({
    'url': message.action,
    'data': parameterMap,
    'cache': true,
    'dataType': 'jsonp',
    'jsonpCallback': 'cb',
    'done': function(data, textStats, XMLHttpRequest) {
      console.log(data);
      render(data);
    },
    'fail': function(error){
      console.log('get request failed: ', error);
    }
});

};


// var fetch = function(){
  // var userLocation = locate(canLocate);
  // if (userLocation !== undefined){
  //   yelpAuth(userLocation);
  // } else {
  //   console.log('location not found');
  // }  
// };


