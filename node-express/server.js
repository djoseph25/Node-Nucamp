const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const campsiteRouter = require('./routes/campsiteRouter');
const promotionRouter = require('./promotionRouter/promotionRouter')
const partnerRouter = require('./partnerRouter/partnerRouter')

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/campsites', campsiteRouter);

app.use('/promotions', promotionRouter);

app.use('/partners', partnerRouter);

// NOTE Morgan will log the file for me now
//ANCHOR _dirname will go to the obsolut path

app.use(express.static(__dirname + '/public'));

app.use((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/html');
	res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

app.listen(port, hostname, () => {
	console.log(`Servers running at http://${hostname}:${port}/`);
});
