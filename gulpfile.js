/*
 * Combines and minifies css & javascript, then saves result in dist/.
 * Watches for changes in the static/ folder then rebuilds when necessary.
 * To make changes to the web code, run `gulp` in the repository directory when working.
 */

var gulp = require("gulp"),
	minifyCss = require("gulp-clean-css"),
	concat = require("gulp-concat"),
	uglify = require("gulp-uglify");

process.chdir("static");

gulp.task("minify-css", function() {
	return gulp.src(["css/vendor/*.css", "css/*.css"])
		.pipe(minifyCss({compatibility: "ie8"}))
		.pipe(concat("tdr.min.css"))
		.pipe(gulp.dest("dist"));
});

gulp.task("minify-js", function() {
	return gulp.src(["js/vendor/jquery.min.js", "js/vendor/*.js", "js/*.js"])
		.pipe(uglify())
		.pipe(concat("tdr.min.js"))
		.pipe(gulp.dest("dist"));
});

gulp.task("default", ["minify-css", "minify-js"]);

gulp.task("stop", ["minify-css", "minify-js"], function() {
	process.exit();
});

var watcher = gulp.watch(["*.*", "css/**", "js/**"], ["default"]);
watcher.on("change", function(event) {
	console.log("File " + event.path + " was " + event.type + ", running tasks...");
});