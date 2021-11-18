'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');
require('rxjs');

var FirebaseDynamicLinks = /** @class */ (function (_super) {
    tslib.__extends(FirebaseDynamicLinks, _super);
    function FirebaseDynamicLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FirebaseDynamicLinks.prototype.getDynamicLink = function () { return core.cordova(this, "getDynamicLink", { "otherPromise": true }, arguments); };
    FirebaseDynamicLinks.prototype.onDynamicLink = function () { return core.cordova(this, "onDynamicLink", { "callbackOrder": "reverse", "observable": true }, arguments); };
    FirebaseDynamicLinks.prototype.createDynamicLink = function (opts) { return core.cordova(this, "createDynamicLink", { "otherPromise": true }, arguments); };
    FirebaseDynamicLinks.prototype.createShortDynamicLink = function (opts) { return core.cordova(this, "createShortDynamicLink", { "otherPromise": true }, arguments); };
    FirebaseDynamicLinks.prototype.createUnguessableDynamicLink = function (opts) { return core.cordova(this, "createUnguessableDynamicLink", { "otherPromise": true }, arguments); };
    FirebaseDynamicLinks.pluginName = "FirebaseDynamicLinks";
    FirebaseDynamicLinks.plugin = " cordova-plugin-firebase-dynamiclinks";
    FirebaseDynamicLinks.pluginRef = "cordova.plugins.firebase.dynamiclinks";
    FirebaseDynamicLinks.repo = "https://github.com/chemerisuk/cordova-plugin-firebase-dynamiclinks";
    FirebaseDynamicLinks.install = "ionic cordova plugin add cordova-plugin-firebase-dynamiclinks --save --variable APP_DOMAIN=\"example.com\" --variable APP_PATH=\"/\"";
    FirebaseDynamicLinks.installVariables = ["APP_DOMAIN", "APP_PATH"];
    FirebaseDynamicLinks.platforms = ["Android", "iOS"];
    FirebaseDynamicLinks.decorators = [
        { type: core$1.Injectable }
    ];
    return FirebaseDynamicLinks;
}(core.IonicNativePlugin));

exports.FirebaseDynamicLinks = FirebaseDynamicLinks;
