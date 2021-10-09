'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core = require('@ionic-native/core');
var core$1 = require('@angular/core');
require('rxjs');

var FCM = /** @class */ (function (_super) {
    tslib.__extends(FCM, _super);
    function FCM() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FCM.prototype.getAPNSToken = function () { return core.cordova(this, "getAPNSToken", {}, arguments); };
    FCM.prototype.getToken = function () { return core.cordova(this, "getToken", {}, arguments); };
    FCM.prototype.onTokenRefresh = function () { return core.cordova(this, "onTokenRefresh", { "observable": true }, arguments); };
    FCM.prototype.subscribeToTopic = function (topic) { return core.cordova(this, "subscribeToTopic", {}, arguments); };
    FCM.prototype.unsubscribeFromTopic = function (topic) { return core.cordova(this, "unsubscribeFromTopic", {}, arguments); };
    FCM.prototype.hasPermission = function () { return core.cordova(this, "hasPermission", {}, arguments); };
    FCM.prototype.onNotification = function () { return core.cordova(this, "onNotification", { "observable": true, "successIndex": 0, "errorIndex": 2 }, arguments); };
    FCM.prototype.clearAllNotifications = function () { return core.cordova(this, "clearAllNotifications", {}, arguments); };
    FCM.prototype.requestPushPermissionIOS = function (options) { return core.cordova(this, "requestPushPermissionIOS", {}, arguments); };
    FCM.prototype.createNotificationChannelAndroid = function (channelConfig) { return core.cordova(this, "createNotificationChannelAndroid", {}, arguments); };
    FCM.pluginName = "FCM";
    FCM.plugin = "cordova-plugin-fcm-with-dependecy-updated";
    FCM.pluginRef = "FCMPlugin";
    FCM.repo = "https://github.com/andrehtissot/cordova-plugin-fcm-with-dependecy-updated";
    FCM.platforms = ["Android", "iOS"];
    FCM.decorators = [
        { type: core$1.Injectable }
    ];
    return FCM;
}(core.IonicNativePlugin));

exports.FCM = FCM;
