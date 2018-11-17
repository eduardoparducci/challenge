var fs = require('fs')
const mongoose = require('mongoose')


var Schema = mongoose.Schema

var userSchema = new Schema({ _id: Number, name: String},{collection:'users'});

var reactionsSchema = new Schema(
    {
	_id: Number,
	reaction: String,
	user: Number
    },
    {
	collection:'reactions'
    }
);

async function run() {
    var db = mongoose.connection
    var users = mongoose.model('User',userSchema)
    
    console.log('Connecting to Database test')
    mongoose.connect('mongodb://127.0.0.1/test',{useNewUrlParser: true})

    // error connecting with Database
    db.on('error', console.error.bind(console, 'console error'))

    // Connected to Database 'test'
    db.once('open', function(){
	let user_list = users.find()
	console.log(user_list)
    });
}

run()
