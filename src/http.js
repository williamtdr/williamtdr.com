var express = require("express"),
	exphbs = require("express-handlebars"),
	session = require("express-session"),
	fs = require("fs"),
	utils = require("./utils");

var app = express();

app.engine("handlebars", exphbs({
	defaultLayout: "main",
	helpers: {}
}));
app.set("view engine", "handlebars");

app.use(express.static("static"));

app.use(session({
	secret: utils.randomString(40),
	resave: false,
	saveUninitialized: true
}));

app.get("/", (req, res) => {
	res.render("home");
});

app.param("id", function (req, res, next, id) {
	res.locals.id = id;
	next();
});

app.get("/project/:id", (req, res, next) => {
	fs.readFile("data/projects/" + res.locals.id + "/project.json", "utf8", (err, data) => {
		data = JSON.parse(data);
		if(err)
			return next();

		res.locals.extra_styles = "/css/project.css";

		data.id = res.locals.id;
		res.locals = data;

		fs.readFile("data/projects/" + res.locals.id + "/description.html", "utf8", (err, data) => {
			res.locals.description = data;

			res.render("project");
		});
	});
});

app.use((req, res) => {
	res.locals.error = "404: File not found.";
	res.locals.extra_styles = "/css/error.css";

	res.status(404).render("error");
});

var ip = global.user_config.get("web_server.ip"),
	port = global.user_config.get("web_server.port");

app.listen(port, ip, () => {
	console.log("Web server listening on " + ip + ":" + port);
});