const express = require('express');
const bodyParser= require('body-parser');
const app = express();

var friends = ['Tony', 'Miranda', 'Justin', 'Pierre', 'Lily'];

// body-parser is used to turn the request body into a JS object
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
	res.render('home');
});


app.get('/friends', function(req, res) {
	
	res.render('friends', {friends: friends});
});


app.post('/addFriend', function(req, res){
	// express out of the box doesnt create the body so we have to create the body as an Object
	// Use body-parser via npm
	let newFriend = (req.body.newFriend);
	friends.push(newFriend)
	// res.send() will simply put the string at the /addFriend route
	//res.send('You have reached the post route');
	res.redirect('friends');
});
	

app.listen(3000, function(){
	console.log('Server listening on Port 3000');
});