var gulp = require('gulp');
var exec = require('child_process').exec;
var sftp = require("gulp-sftp");

function sftpOpts() {
    return {
        host: "185.133.194.79",
        user: "yo",
        remotePath: ""
    };
}
gulp.task('default', function() {
  // place code for your default task here
    exec('node server.js', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
  });
});    

gulp.task('deploy', function() {
  // place code for your default task here
    gulp.src("*.*").
    pipe(gulp.dest("/dist"))
    .pipe(sftp({
        host: "185.133.194.79",
        user: "yo",
        auth: "password",
        pass: "4314exs",
        remotePath: "."
    }));;
});    