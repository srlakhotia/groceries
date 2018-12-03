const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config.js');
const mongoConnection = require('./mongoConnection');


let app = express();
app.listen(config.APP_SERVER_PORT_NO, () => console.log('App listening on port:',config.APP_SERVER_PORT_NO ));

app.use(express.static('docs'));
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

require("./src/routes")(app, config);
mongoConnection();

module.exports = app;