var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/myRetail');

var db = mongoose.connection;

if(db){
	console.log("Connected to MongoDB!!!");
}

var p = require('./mock_data');

var products = mongoose.model(
	'products',
	mongoose.Schema({
		'title': String,
		'image': String,
		'description': String,
		'price': Number,
		'online': Boolean,
		'quantity': Number,
		'details': Array
	})
);

products.find({}, function(err, entries){
	for(var i = 0; i < entries.length; i++){
		entries[i].remove();
	}
	for(var i = 0; i < p.length; i++){
		var product = new products({
			'title': p[i].title,
			'image': p[i].image,
			'description': p[i].description,
			'price': p[i].price,
			'online': p[i].online,
			'quantity': p[i].quantity,
			'details': p[i].details
		});
		product.save(function(err, entry){
			if(err){
				console.log("Error on product save!");
			}
		});
	}
	console.log("Products import finished without errors!");
});
var User = mongoose.model(
	'User',
	mongoose.Schema({
		'email': String,
		'password': String,
		'username': String
	})
);

var user = new User({
	'email': 'tester@target.com',
	'password': 'test123',
	'username': 'tester'
});
user.save(function(err, entry){
	if(err){
		console.log("Error on product save!");
	}
		console.log("Import finished without errors! Press CTRL+C to exit!");

});
	
