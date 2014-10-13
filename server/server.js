var app = require('./utils');

var port = process.env.PORT || 3000;

app.listen(port);

console.log('Server now listening on port ' + port);
