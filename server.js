import express from 'express';
import apiRouter from './api';
import config, { logStars } from './config';
const server = express();

server.set('view engine', 'ejs'); //sets viewengine to EJS. searches in views folder by default.
server.get('/',(req,res) => {
	res.render('index',{
		content: "Hello from express rendered with <em>EJS</em>."
	});//Render the EJS
});
server.use(express.static('public'));
server.use('/api', apiRouter);
server.listen(config.port, () => {
	console.info('Listening on port ', config.port);
});

//view template with dynamic data
//EJS - dynamic template language. 
//EJS to render javascript frontend
//EJS to html, but js can be embedded in them
