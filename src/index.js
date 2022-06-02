const express = require('express');
var bodyParser = require('body-parser');

const route = require('./routes/route.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', route);/* '/'- It's Define The Processing After This - 270.0.0.1||Localhost:PORT||3000 && route- Define The Path Where it Prosseces */

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
// PORT|| 3000 - It's Define The Port No 
