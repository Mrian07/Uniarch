import { IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs';
export interface NotificationData {
    /**
     * Determines whether the notification was pressed or not
     */
    wasTapped: boolean;
    /**
     * Notification data hash item
     */
    [name: string]: any;
}
export interface IRequestPushPermissionIOSOptions {
    /**
     * Options exclusive for iOS 9 support
     */
    ios9Support?: {
        /**
         * How long it will wait for a decision from the user before returning `false`, defaults to 10
         */
        timeout?: number;
        /**
         * How long between each permission verification, defaults to 0.3
         */
        interval?: number;
    };
}
export interface IChannelConfiguration {
    /**
     * Channel id, used in the android_channel_id push payload key
     */
    id: string;
    /**
     * Channel name, visible for the user
     */
    name: string;
    /**
     * Channel description, visible for the user
     */
    description?: string;
    /**
     * Importance for notifications of this channel
     * https://developer.android.com/guide/topics/ui/notifiers/notifications#importance
     */
    importance?: 'none' | 'min' | 'low' | 'default' | 'high';
    /**
     * Visibility for notifications of this channel
     * https://developer.android.com/training/notify-user/build-notification#lockscreenNotification
     */
    visibility?: 'public' | 'private' | 'secret';
    /**
     * Default sound resource for notifications of this channel
     * The file should located as resources/raw/[resource name].mp3
     */
    sound?: string;
    /**
     * Enable lights for notifications of this channel
     */
    lights?: boolean;
    /**
     * Enable vibration for notifications of this channel
     */
    vibration?: boolean;
}
/**
 * @name FCM
 * @capacitorincompatible true
 * @description
 * Provides basic functionality for Firebase Cloud Messaging
 *
 * @usage
 * ```typescript
 * import { FCM } from '@ionic-native/fcm/ngx';
 *
 * constructor(private fcm: FCM) {}
 *
 * ...
 *
 * this.fcm.subscribeToTopic('marketing');
 *
 * this.fcm.getToken().then(token => {
 *   backend.registerToken(token);
 * });
 *
 * this.fcm.onNotification().subscribe(data => {
 *   if(data.wasTapped){
 *     console.log("Received in background");
 *   } else {
 *     console.log("Received in foreground");
 *   };
 * });
 *
 * this.fcm.onTokenRefresh().subscribe(token => {
 *   backend.registerToken(token);
 * });
 *
 * this.fcm.hasPermission().then(hasPermission => {
 *   if (hasPermission) {
 *     console.log("Has permission!");
 *   }
 * })
 *
 * this.fcm.clearAllNotifications();
 *
 * this.fcm.unsubscribeFromTopic('marketing');
 *
 * ```
 * @interfaces
 * NotificationData
 * IRequestPushPermissionIOSOptions
 * IChannelConfiguration
 */
export declare class FCM extends IonicNativePlugin {
    /**
     * Gets ios device's current APNS token
     *
     * @returns {Promise<string>} Returns a Promise that resolves with the APNS token
     */
    getAPNSToken(): Promise<string>;
    /**
     * Gets device's current registration id
     *
     * @returns {Promise<string>} Returns a Promise that resolves with the registration id token
     */
    getToken(): Promise<string>;
    /**
     * Event firing on the token refresh
     *
     * @returns {Observable<string>} Returns an Observable that notifies with the change of device's registration id
     */
    onTokenRefresh(): Observable<string>;
    /**
     * Subscribes you to a [topic](https://firebase.google.com/docs/notifications/android/console-topics)
     *
     * @param {string} topic Topic to be subscribed to
     *
     * @returns {Promise<any>} Returns a promise resolving in result of subscribing to a topic
     */
    subscribeToTopic(topic: string): Promise<any>;
    /**
     * Unsubscribes you from a [topic](https://firebase.google.com/docs/notifications/android/console-topics)
     *
     * @param {string} topic Topic to be unsubscribed from
     *
     * @returns {Promise<any>} Returns a promise resolving in result of unsubscribing from a topic
     */
    unsubscribeFromTopic(topic: string): Promise<any>;
    /**
     * Checking for permissions on iOS. On android, it always returns `true`.
     *
     * @returns {Promise<boolean | null>} Returns a Promise:
     * - true: push was allowed (or platform is android)
     * - false: push will not be available
     * - null: still not answered, recommended checking again later.
     */
    hasPermission(): Promise<boolean | null>;
    /**
     * Watch for incoming notifications
     *
     * @returns {Observable<any>} returns an object with data from the notification
     */
    onNotification(): Observable<NotificationData>;
    /**
     * Removes existing push notifications from the notifications center
     *
     * @returns {Promise<void>}
     */
    clearAllNotifications(): void;
    /**
     * Request push notification permission, alerting the user if it not have yet decided
     *
     * @param {IRequestPushPermissionIOSOptions} options Options for push request
     *
     * @returns {Promise<boolean>} Returns a Promise that resolves with the permission status
     */
    requestPushPermissionIOS(options?: IRequestPushPermissionIOSOptions): Promise<boolean>;
    /**
     * For Android, some notification properties are only defined programmatically.
     *
     * Channel can define the default behavior for notifications on Android 8.0+.
     *
     * Once a channel is created, it stays unchangeable until the user uninstalls the app.
     *
     * @param channelConfig
     *
     * @returns {Promise<void>}
     */
    createNotificationChannelAndroid(channelConfig: IChannelConfiguration): void;
}
