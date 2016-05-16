var Config = require("./src/config");
global.user_config = false; // config/config.json

var next = (result) => {
	if(!result) {
		console.log("There was an error reading the configuration file (config/config.json).");
		console.log("Please make sure the file exists, has the proper permissions and valid JSON.");
		console.log("If you'd like to start over, copy config.sample.json.");
		return process.exit(1);
	}

	var http = require("./src/http");
};

console.log("Reading configuration...");
global.user_config = new Config("config/config.json", next);