"use strict";
exports.__esModule = true;
var SiteController = /** @class */ (function () {
    function SiteController() {
        this.routes = [{
                url: '/',
                httpMethod: 'get',
                callback: this.index
            },
            {
                url: '/login',
                httpMethod: 'get',
                callback: this.login
            },
            {
                url: '/register',
                httpMethod: 'get',
                callback: this.register
            }];
    }
    SiteController.prototype.index = function (req, res) {
        res.render('home/index', { title: 'Hey', message: 'its the index!' });
    };
    SiteController.prototype.register = function (req, res) {
        res.render('home/index', { title: 'Hey', message: 'its the register!' });
    };
    SiteController.prototype.login = function (req, res) {
        res.render('home/index', { title: 'Hey', message: 'its the login!' });
    };
    return SiteController;
}());
exports.SiteController = SiteController;
