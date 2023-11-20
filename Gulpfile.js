
const gulp= require ("gulp");
const sass = require ("gulp-sass")(require("sass"));
const uglify = require("gulp-uglify");
const images = require("gulp-imagemin");


function styles (){

    return gulp.src("./src/styles/*scss")

    .pipe(sass({outputStyle:"compressed"}))
    .pipe(gulp.dest("dist/css"))
}

function scripts(){
    return gulp.src("./src/scripts/*js")
    .pipe(uglify())
    .pipe(gulp.dest("dist/js"))
}

function image (){
    return gulp.src("./src/images/*")
    .pipe(images())
    .pipe(gulp.dest("dist/images"))
}


exports.default = gulp.parallel(styles,scripts,image)

exports.watch = function () { 
    gulp.watch("./src/styles/*.scss", gulp.parallel(styles))
    gulp.watch("./src/scripts/*.js", gulp.parallel(scripts))
    
 }
