var aws = require('aws-sdk');

module.exports = function(){
	
	//Initialization Error
	function ChargedInitializationError(message){
		this.message = message;
		this.name = "ChargedInitializationError";
	}
	
	var Charged = function(table, schema, setup){
		//Safety checks!		
		if(typeof table != 'string') {
			throw new ChargedInitializationError('Table name must be a string');
		} else if(!schema){
			throw new ChargedInitializationError('Schema must be provided');
		} else if(typeof schema != 'object' || schema instanceof Array){
			throw new ChargedInitializationError('Schema must be an object - {}');
		} else if(setup && typeof setup != 'object'){
			throw new ChargedInitializationError('Schema must be an object - {}');
		}
		
		this.table = table;
		this.schema = schema;
		
		//Setup the schema
		
		//Go through each schema attribute
		Object.keys(schema).forEach(function(attribute)){
			//If the schema is indexed
			
		};
		
	};
	
	//Validate, but do not save
	Charged.prototype.validate = function(cb){
		
	};
	
	//Save and return model
	Charged.prototype.create = function(cb){
		
	};
	
	//Find all models, 
	Charged.prototype.find = function(cb){
		
	};
	
	//Find all models, but limit results
	Charged.prototype.findOne = function(cb){
		
	};
	
	return Charged;
	
}