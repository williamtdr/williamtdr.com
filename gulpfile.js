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

gulp.task("minify-base-css", function() {
	return gulp.src(["css/vendor/*.css", "css/style.css"])
		.pipe(minifyCss({compatibility: "ie8"}))
		.pipe(concat("tdr.min.css"))
		.pipe(gulp.dest("dist"));
});

gulp.task("minify-home-css", function() {
	return gulp.src(["css/grayscale.css", "css/home.css"])
		.pipe(minifyCss({compatibility: "ie8"}))
		.pipe(concat("tdr.home.min.css"))
		.pipe(gulp.dest("dist"));
});

gulp.task("minify-project-css", function() {
	return gulp.src(["css/project.css"])
		.pipe(minifyCss({compatibility: "ie8"}))
		.pipe(concat("tdr.project.min.css"))
		.pipe(gulp.dest("dist"));
});

gulp.task("minify-base-js", function() {
	return gulp.src(["js/vendor/jquery.min.js", "js/vendor/bootstrap.min.js", "js/analytics.js"])
		.pipe(uglify())
		.pipe(concat("tdr.min.js"))
		.pipe(gulp.dest("dist"));
});

gulp.task("minify-home-js", function() {
	return gulp.src(["js/vendor/jquery.easing.min.js", "js/grayscale.js", "js/home.js"])
		.pipe(uglify())
		.pipe(concat("tdr.home.min.js"))
		.pipe(gulp.dest("dist"));
});

gulp.task("minify-project-js", function() {
	return gulp.src(["js/vendor/jquery.slides.min.js", "js/project.js"])
		.pipe(uglify())
		.pipe(concat("tdr.project.min.js"))
		.pipe(gulp.dest("dist"));
});

gulp.task("default", ["minify-base-css", "minify-home-css", "minify-project-css", "minify-base-js", "minify-home-js", "minify-project-js"]);

var watcher = gulp.watch(["*.*", "css/**", "js/**"], ["default"]);
watcher.on("change", function(event) {
	console.log("File " + event.path + " was " + event.type + ", running tasks...");
});