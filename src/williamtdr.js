var fs = require("fs");

module.exports = {
	projectsByTime: [],
	projectsByAwesomeness: [],
	projectsById: []
};

console.log("Loading projects...");
var projectNames = fs.readdirSync("./data/projects"),
	projects = [];

for(var project of projectNames) {
	if(project.substr(0, 1) === ".")
		continue; // .DS_Store <3

	try {
		var p = {};
		p = JSON.parse(fs.readFileSync("./data/projects/" + project + "/project.json"));
		p.id = project;
		p.description = fs.readFileSync("./data/projects/" + project + "/description.html", "utf8");

		projects.push(p);
		module.exports.projectsById[project] = p;
	} catch(e) {
		console.log("Error when loading project " + project + ":");
		console.log(e);
	}
}

module.exports.projectsByAwesomeness = projects.sort((a, b) => {
	if(parseInt(a.order.awesomeness) < parseInt(b.order.awesomeness))
		return 1;

	if(parseInt(a.order.awesomeness) > parseInt(b.order.awesomeness))
		return -1;

	return 0;
}).slice(0);

module.exports.projectsByTime = projects.sort((a, b) => {
	if(parseInt(a.order.time) < parseInt(b.order.time))
		return 1;

	if(parseInt(a.order.time) > parseInt(b.order.time))
		return -1;

	return 0;
}).slice(0);