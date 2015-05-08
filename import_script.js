var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/lakes');

var db = mongoose.connection;

if(db){
	console.log("Connected to MongoDB!!!");
}

var lakes = require('./lakes');

var Lake = mongoose.model(
	'Lake',
	mongoose.Schema({
		'id': String,
		'DOWLKNUM': String,
		'lakeName': String,
		'altName': String,
		'rivName': String,
		'launchName': String,
		'launchType': String,
		'rampType': String,
		'numRamps': String,
		'numToilets': String,
		'dataUpdate': String,
		'acres': String,
		'county': String,
		'latitude': String,	
		'longitude': String
	})
);

Lake.find({}, function(err, entries){
	for(var i = 0; i < entries.length; i++){
		entries[i].remove();
	}
	for(var i = 0; i < lakes.length; i++){
		var lake = new Lake({
			'id': lakes[i].id,
			'DOWLKNUM': lakes[i].DOWLKNUM,
			'lakeName': lakes[i].lakeName,
			'altName': lakes[i].altName,
			'rivName': lakes[i].rivName,
			'launchName': lakes[i].launchName,
			'launchType': lakes[i].launchType,
			'rampType': lakes[i].rampType,
			'numRamps': lakes[i].numRamps,
			'numToilets': lakes[i].numToilets,
			'dataUpdate': lakes[i].dataUpdate,
			'acres': lakes[i].acres,
			'county': lakes[i].county,
			'latitude': lakes[i].latitude,
			'longitude': lakes[i].longitude
		});
		lake.save(function(err, entry){
			if(err){
				console.log("Error on lake save!");
			}
		});
	}
	console.log("Import finished without errors! Press CTRL+C to exit!");
});