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
 * @interface ApiV1ChatsChatIdMessagesPostRequest
 */
export interface ApiV1ChatsChatIdMessagesPostRequest {
    /**
     *
     * @type {string}
     * @memberof ApiV1ChatsChatIdMessagesPostRequest
     */
    clientSideId?: string;
    /**
     *
     * @type {string}
     * @memberof ApiV1ChatsChatIdMessagesPostRequest
     */
    compressAlgorithm?: string;
    /**
     *
     * @type {string}
     * @memberof ApiV1ChatsChatIdMessagesPostRequest
     */
    content?: string;
    /**
     *
     * @type {string}
     * @memberof ApiV1ChatsChatIdMessagesPostRequest
     */
    cryptAlgorithm?: string;
    /**
     *
     * @type {string}
     * @memberof ApiV1ChatsChatIdMessagesPostRequest
     */
    fileId?: string;
    /**
     *
     * @type {string}
     * @memberof ApiV1ChatsChatIdMessagesPostRequest
     */
    replyToId?: string;
}
/**
 * Check if a given object implements the ApiV1ChatsChatIdMessagesPostRequest interface.
 */
export declare function instanceOfApiV1ChatsChatIdMessagesPostRequest(value: object): boolean;
export declare function ApiV1ChatsChatIdMessagesPostRequestFromJSON(json: any): ApiV1ChatsChatIdMessagesPostRequest;
export declare function ApiV1ChatsChatIdMessagesPostRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiV1ChatsChatIdMessagesPostRequest;
export declare function ApiV1ChatsChatIdMessagesPostRequestToJSON(value?: ApiV1ChatsChatIdMessagesPostRequest | null): any;
