//create express app 
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const User=require('./models/user');
//connect to mongodb
mongoose.connect('mongodb+srv://user:User123@cluster0.whef4.mongodb.net/?retryWrites=true&w=majority');
//check for connection
mongoose.connection.on('connected', () => {
	    console.log('connected to mongodb');
}
);
//use body parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
//use cors
app.use(cors());


app.post('/register', (req, res) => {
	//create user
	//store req.body values in variables string name, string pwd, string idno
	//console log only name from req.body
	//create new user object
	//save new user object
	//send response with status code 200 and message 'user created'
	//if error, send response with status code 400 and message 'error creating user'
	let name=req.body.name;
	let pwd=req.body.pwd;
	let idno=req.body.idno;
	console.log(name);
	const users = new User({
		name: name,
		pwd: pwd,
		idno: idno
	}).save().then(() => {
		//console.log(responce);
		console.log('user saved');
		res.send('user created');
	}
	).catch(err => {
		console.log(err);
		res.send(err);
	}
	);
})
//start server

app.get('/users', (req, res) => {
	User.find().then(users => {
		res.send(users);
	}
	).catch(err => {
		res.send(err);
	}
	);
}
);
//update user
app.put('/usersed', (req, res) => {
	User.findByIdAndUpdate(req.body.id, {
		name: req.body.name,
		pwd: req.body.pwd,
		idno: req.body.idno
	}
	).then(() => {
		res.send('user updated');
	}
	).catch(err => {
		res.send(err);
	}
	);
});
//delete user
app.delete('/users/:id', (req, res) => {
	User.findByIdAndRemove(req.params.id).then(() => {
		res.send('user deleted');
	}
	).catch(err => {
		res.send(err);
	});
});


app.listen(8012, () => {
	console.log('server is running on port 8012');
});
