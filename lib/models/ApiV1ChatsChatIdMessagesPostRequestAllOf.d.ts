/**
 * Khalad API
 * This is open source Khala server implementation.
 *
 * The version of the OpenAPI document: 0.1.0-alpha.1
 * Contact: info@cnodax.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 *
 * @export
 * @interface ApiV1ChatsChatIdMessagesPostRequestAllOf
 */
export interface ApiV1ChatsChatIdMessagesPostRequestAllOf {
    /**
     *
     * @type {string}
     * @memberof ApiV1ChatsChatIdMessagesPostRequestAllOf
     */
    clientSideId?: string;
    /**
     *
     * @type {string}
     * @memberof ApiV1ChatsChatIdMessagesPostRequestAllOf
     */
    compressAlgorithm?: string;
    /**
     *
     * @type {string}
     * @memberof ApiV1ChatsChatIdMessagesPostRequestAllOf
     */
    cryptAlgorithm?: string;
    /**
     *
     * @type {string}
     * @memberof ApiV1ChatsChatIdMessagesPostRequestAllOf
     */
    mime?: string;
    /**
     *
     * @type {string}
     * @memberof ApiV1ChatsChatIdMessagesPostRequestAllOf
     */
    text?: string;
}
/**
 * Check if a given object implements the ApiV1ChatsChatIdMessagesPostRequestAllOf interface.
 */
export declare function instanceOfApiV1ChatsChatIdMessagesPostRequestAllOf(value: object): boolean;
export declare function ApiV1ChatsChatIdMessagesPostRequestAllOfFromJSON(json: any): ApiV1ChatsChatIdMessagesPostRequestAllOf;
export declare function ApiV1ChatsChatIdMessagesPostRequestAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiV1ChatsChatIdMessagesPostRequestAllOf;
export declare function ApiV1ChatsChatIdMessagesPostRequestAllOfToJSON(value?: ApiV1ChatsChatIdMessagesPostRequestAllOf | null): any;
