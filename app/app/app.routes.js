"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var app_controler_1 = require("./app.controler");
var routes_controler_1 = require("../core/routes.controler");
var AppRoutes = (function (_super) {
    __extends(AppRoutes, _super);
    function AppRoutes(app, router) {
        var _this = _super.call(this, app, router) || this;
        _this.app = app;
        _this.router = router;
        _this.appCtrl = new app_controler_1.AppControler();
        return _this;
    }
    AppRoutes.bootstrap = function (app, router) {
        return new AppRoutes(app, router);
    };
    AppRoutes.prototype.routes = function () {
        this.router.get('/asd/:value', this.appCtrl.index.bind(this.appCtrl.index));
    };
    return AppRoutes;
}(routes_controler_1.RoutesControler));
exports.AppRoutes = AppRoutes;
