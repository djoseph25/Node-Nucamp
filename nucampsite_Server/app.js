var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
const passport = require('passport');
const config = require ('./config')
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const campsiteRouter = require('./routes/campsiteRouter');
const promotionRouter = require('./routes/promotionRouter');
const partnerRouter = require('./routes/partnerRouter');

const mongoose = require('mongoose');
const url = config.mongoUrl;
const connect = mongoose.connect(url, {
	useCreateIndex: true,
	useFindAndModify: false,
	useNewUrlParser: true,
	useUnifiedTopology: true,
});
const promotionRouter = require("./routes/promotionRouter");
const partnerRouter = require("./routes/partnerRouter");
const uploadRouter = require("./routes/uploadRouter");
const favoriteRouter = require('./routes/favoriteRouter');



connect.then(
	() => console.log(`Connected Correctly to the Server at: ${url}`),
	(err) => console.log(err)
);

const app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(passport.initialize());

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use(express.static(path.join(__dirname, 'public')));

app.use('/campsites', campsiteRouter);
app.use('/promotions', promotionRouter);
app.use('/partners', partnerRouter);
app.use('/favorites', favoriteRouter);
app.use('/upload', uploadRouter);
//NOTE catch error 
app.use(function (req, res, next) {
	next(createError(404));
});

//NOTE error handler
app.use(function (err, req, res, next) {

	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	//NOTE render the error page
	res.status(err.status || 500);
	res.render('error');
});

module.exports = app;
