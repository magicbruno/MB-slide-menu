var gulp = require("gulp");
var sass = require("gulp-sass")(require('sass'));
var autoprefixer = require("gulp-autoprefixer");


var input = "src/*.scss";
var output = "dist/css";



gulp.task("sass", function() {
  return gulp //add gulp without return to keep session going

    // Find all .scss files from the sass/ folder

    .src(input)

    // Run Sass on those files || pipe adds everything together

    .pipe(sass().on("error", sass.logError)) //error log to keep session going when scss contains error

    .pipe(
      autoprefixer(
        "last 1 major version",
        ">= .1%",
        "Chrome >= 45",
        "Firefox >= 38",
        "Edge >= 12",
        "Explorer >= 10",
        "iOS >= 9",
        "Safari >= 9",
        "Android >= 4.4",
        "Opera >= 30"
      )
    )

    // Write the resulting CSS in the output folder
    .pipe(gulp.dest(output));
});

gulp.task("compressed", function() {
    return gulp.src(input)
      // Run Sass on those files || pipe adds everything together
      .pipe(sass({outputStyle:"compressed"}).on("error", sass.logError)) //error log to keep session going when scss contains error
      .pipe(
        autoprefixer(
          "last 1 major version",
          ">= .1%",
          "Chrome >= 45",
          "Firefox >= 38",
          "Edge >= 12",
          "Explorer >= 10",
          "iOS >= 9",
          "Safari >= 9",
          "Android >= 4.4",
          "Opera >= 30"
        )
      )
      // Write the resulting CSS in the output folder
      .pipe(gulp.dest(output + "/min"));
  });

gulp.task('default', gulp.series(['sass','compressed']));
