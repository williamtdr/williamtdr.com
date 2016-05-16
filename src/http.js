/*
 * Serves as the interface to the application.
 * Layout & template files can be found in views/, styles & client-side
 * scripts in static/. When modifying the CSS or JS, run gulp in a separate
 * process to rebuild the minified files the client loads.
 *
 * Url structure:
 * / - Prompt for user & region, then redirect
 *
 * /{region}/{summonerName} - URL the user sees for profiles. Redirects to /
 * with an error if the summoner was not found, otherwise shows basic summoner
 * info and loads data in from an AJAX request, to allow time for the API requests
 * to complete.
 *
 * /data/{region}/{summonerName} - AJAX request from the profile page. Gets and
 * formats data from Riot APIs, then injected as HTML into the profile page when
 * done.
 */

var express = require("express"),
	exphbs = require("express-handlebars"),
	compression = require("compression"),
	session = require("express-session"),
	fs = require("fs"),
	utils = require("./utils");

var app = express();

app.engine("handlebars", exphbs({
	defaultLayout: "main",
	helpers: {}
}));
app.set("view engine", "handlebars");

app.use(compression());
app.use(express.static("static"));

app.use(session({
	secret: utils.randomString(40),
	resave: false,
	saveUninitialized: true
}));

app.get("/", (req, res) => {
	res.render("home");
});

var ip = global.user_config.get("web_server.ip"),
	port = global.user_config.get("web_server.port");

app.listen(port, ip, () => {
	console.log("Web server listening on " + ip + ":" + port);
});