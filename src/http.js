var express = require("express"),
	exphbs = require("express-handlebars"),
	fs = require("fs"),
	williamtdr = require("./williamtdr"),
	utils = require("./utils");

var app = express();

app.engine("handlebars", exphbs({
	defaultLayout: "main",
	helpers: {}
}));
app.set("view engine", "handlebars");

app.use(express.static("static"));
app.locals.projectsByTime = williamtdr.projectsByTime;
app.locals.projectsByAwesomeness = williamtdr.projectsByAwesomeness;

app.get("/", (req, res) => {
	res.render("home");
});

app.param("id", (req, res, next, id) => {
	res.locals.id = id;
	next();
});

app.get("/project/:id", (req, res, next) => {
	if(!williamtdr.projectsById[res.locals.id])
		return next();

	res.locals = williamtdr.projectsById[res.locals.id];

	res.render("project", {
		layout: "project"
	});
});

app.use((req, res) => {
	res.locals.error = "404: File not found.";

	res.status(404).render("error", {
		layout: "error"
	});
});

var ip = global.user_config.get("web_server.ip"),
	port = global.user_config.get("web_server.port");

app.listen(port, ip, () => {
	console.log("Web server listening on " + ip + ":" + port);
});