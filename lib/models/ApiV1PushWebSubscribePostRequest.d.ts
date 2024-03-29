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
 * @interface ApiV1PushWebSubscribePostRequest
 */
export interface ApiV1PushWebSubscribePostRequest {
    /**
     *
     * @type {string}
     * @memberof ApiV1PushWebSubscribePostRequest
     */
    token?: string;
}
/**
 * Check if a given object implements the ApiV1PushWebSubscribePostRequest interface.
 */
export declare function instanceOfApiV1PushWebSubscribePostRequest(value: object): boolean;
export declare function ApiV1PushWebSubscribePostRequestFromJSON(json: any): ApiV1PushWebSubscribePostRequest;
export declare function ApiV1PushWebSubscribePostRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiV1PushWebSubscribePostRequest;
export declare function ApiV1PushWebSubscribePostRequestToJSON(value?: ApiV1PushWebSubscribePostRequest | null): any;
