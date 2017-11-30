const autoPrefixer = require('gulp-autoprefixer');
const babel = require('gulp-babel');
const browserSync = require('browser-sync').create();
const childProcess = require('child_process');
const concat = require('gulp-concat');
const gulp = require('gulp');
const sass = require('gulp-sass');
const pump = require('pump');
const util = require('gulp-util');

const files = {
  sass: '_sass/**/*.sass',
  js: '_js/**/*.js',
};
const site = { root: '_site' };

gulp.task('sass', () => {
  pump([
    gulp.src(files.sass),
    concat('style.sass'),
    sass({ outputStyle: 'compressed' }),
    autoPrefixer({ browsers: ['IE 6', 'Chrome 9', 'Firefox 14'] }),
    gulp.dest('assets/css'),
  ]);
});

gulp.task('js', () => {
  pump([
    gulp.src(files.js),
    concat('functions.js'),
    babel({
      presets: ['env'],
      minified: true,
    }),
    gulp.dest('assets/js'),
  ]);
});

gulp.task('jekyll', () => {
  const jekyll = childProcess.spawn('jekyll', [
    'build',
    '--watch',
    '--incremental',
  ]);

  const logger = (buffer) => {
    buffer.toString()
      .split(/\n/)
      .forEach(message => util.log(`Jekyll: ${message}`));
  };

  jekyll.stdout.on('data', logger);
  jekyll.stderr.on('data', logger);
});

gulp.task('serve', () => {
  browserSync.init({
    files: [`${site.root}/**`],
    port: 4000,
    server: { baseDir: site.root },
  });

  gulp.watch(files.sass, ['sass']);
  gulp.watch(files.js, ['js']);
});

gulp.task('default', [
  'sass',
  'js',
  'jekyll',
  'serve',
]);
