"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass");
const sassGlob = require("gulp-sass-glob");
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");

gulp.task("sass", function() {
  return gulp
    .src("scss/**/*.scss")
    .pipe(customPlumber("Error running Sass"))
    .pipe(sassGlob())
    .pipe(sass())
    .pipe(gulp.dest("css"));
});

gulp.task("watch", ["sass"], function() {
  gulp.watch(["scss/**/*.scss"], ["sass"]);
});

function customPlumber(errTitle) {
  return plumber({
    errorHandler: notify.onError({
      title: errTitle || "Error running Gulp",
      message: "Error: <%= error.message %>"
    })
  });
}

gulp.task("default", ["sass", "watch"]);
