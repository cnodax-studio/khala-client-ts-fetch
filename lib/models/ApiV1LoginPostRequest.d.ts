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
 * @interface ApiV1LoginPostRequest
 */
export interface ApiV1LoginPostRequest {
    /**
     *
     * @type {string}
     * @memberof ApiV1LoginPostRequest
     */
    login?: string;
    /**
     *
     * @type {string}
     * @memberof ApiV1LoginPostRequest
     */
    password?: string;
}
/**
 * Check if a given object implements the ApiV1LoginPostRequest interface.
 */
export declare function instanceOfApiV1LoginPostRequest(value: object): boolean;
export declare function ApiV1LoginPostRequestFromJSON(json: any): ApiV1LoginPostRequest;
export declare function ApiV1LoginPostRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiV1LoginPostRequest;
export declare function ApiV1LoginPostRequestToJSON(value?: ApiV1LoginPostRequest | null): any;
