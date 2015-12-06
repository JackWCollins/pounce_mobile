'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var browserSync = require('browser-sync');
var browserSyncSpa = require('browser-sync-spa');

var util = require('util');

var proxyMiddleware = require('http-proxy-middleware');
var exec = require('child_process').exec;

var ngConstant = require('gulp-ng-constant');
var concat = require('gulp-concat');
var es = require('event-stream');
var argv = require('yargs').argv;
var enviroment = argv.env || 'development';

function makeConfig() {
  return gulp.src('../server_config.json')
    .pipe(gulpNgConfig('app.config', {
      environment: 'production' // or maybe use process.env.NODE_ENV here
    }));
}

function browserSyncInit(baseDir, browser) {
  browser = browser === undefined ? 'default' : browser;

  var routes = null;
  if(baseDir === conf.paths.src || (util.isArray(baseDir) && baseDir.indexOf(conf.paths.src) !== -1)) {
    routes = {
      '/bower_components': 'bower_components'
    };
  }

  var server = {
    baseDir: baseDir,
    routes: routes
  };

  /*
   * You can add a proxy to your backend by uncommenting the line below.
   * You just have to configure a context which will we redirected and the target url.
   * Example: $http.get('/users') requests will be automatically proxified.
   *
   * For more details and option, https://github.com/chimurai/http-proxy-middleware/blob/v0.0.5/README.md
   */
  server.middleware = proxyMiddleware('/api', { target: 'http://localhost:3000' });

  browserSync.instance = browserSync.init({
    port: 9000,
    startPath: '/',
    server: server,
    browser: browser
  });
}

browserSync.use(browserSyncSpa({
  selector: '[ng-app]'// Only needed for angular apps
}));

gulp.task('rails', function() {
  exec("rails server");
});

gulp.task('serve', ['watch'], function () {
  browserSyncInit([path.join(conf.paths.tmp, '/serve'), conf.paths.src]);
});

gulp.task('serve:full-stack', ['rails', 'serve']);

gulp.task('serve:dist', ['build'], function () {
  browserSyncInit(conf.paths.dist);
});

gulp.task('serve:e2e', ['inject'], function () {
  browserSyncInit([conf.paths.tmp + '/serve', conf.paths.src], []);
});

gulp.task('serve:e2e-dist', ['build'], function () {
  browserSyncInit(conf.paths.dist, []);
});

// Add a config file to client/server config anf then run this task. For details:
// http://stackoverflow.com/questions/16339595/how-do-i-configure-different-environments-in-angular-js
// https://www.npmjs.com/package/gulp-ng-constant#configuration-in-gulpfilejs
// http://paulsalaets.com/posts/setting-angular-config-with-gulp/

gulp.task('config', function () {
  var config = gulp.src('server_config/' + enviroment + '.json')
    .pipe(ngConstant({name: 'app.config'}));
  var scripts = gulp.src('js/*');
  return es.merge(config, scripts)
    .pipe(concat('app.js'))
    .pipe(gulp.dest(path.join(conf.paths.dist, '/')))
    .on('error', function() { });
});