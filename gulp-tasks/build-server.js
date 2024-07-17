/* "use strict";

var gulp                 = require('gulp'),
    browserSync          = require("browser-sync");

var route = require("./route")();

var config = {
    server: {
        baseDir: route.main.build
    },
    host: 'localhost',
    port: 9000,
    reloadDelay: 0,
    open: true
};

gulp.task('webserver', done => {
    browserSync(config);
    done();
}); */

"use strict";

var gulp = require('gulp'),
    browserSync = require("browser-sync");

var route = require("./route")();

// Получите ваш локальный IP-адрес
var os = require('os');
var ifaces = os.networkInterfaces();
var localIp;

Object.keys(ifaces).forEach(function(ifname) {
    ifaces[ifname].forEach(function(iface) {
        if ('IPv4' !== iface.family || iface.internal !== false) {
            // Не внутренний IPv4 интерфейс
            return;
        }
        localIp = iface.address;
    });
});

var config = {
    server: {
        baseDir: route.main.build
    },
    host: localIp || 'localhost', // Используйте локальный IP-адрес
    port: 9000,
    reloadDelay: 0,
    open: true
};

gulp.task('webserver', done => {
    browserSync(config);
    done();
});







