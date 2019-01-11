const path = require('path');
const express = require('express');
const app = express(); //create new express object from const express wala
const publicPath = path.join(__dirname,'..','public');
const port = process.env.PORT || 3000; // Heroku sets it up, if not use 3000

app.use(express.static(publicPath)); //A way to customise our express servers
//here we are using this for middlewares
//middlewares are something that runs for every request
//and we might want to serve that asset from public directory

app.get('*', (req, res) => {
	res.sendFile(path.join(publicPath,'index.html')); //similar to historyApiFallback like when /create fails it will give index.html path
});

app.listen(port, () => {	//starting the server( port no: 3000)
	console.log('Server is up!');
}); 

//EXPRESS SERVER haha