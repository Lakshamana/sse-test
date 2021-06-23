const express = require('express');
const events = require('./events');
const port = 3333;
const app = express();

app.get('/events', cors(), events.subscribe);

app.post('/record', cors())

app.listen(port, function() {
   console.log('Listening on', port);
});
