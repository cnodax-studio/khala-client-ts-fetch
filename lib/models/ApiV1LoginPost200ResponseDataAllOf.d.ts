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
 * @interface ApiV1LoginPost200ResponseDataAllOf
 */
export interface ApiV1LoginPost200ResponseDataAllOf {
    /**
     *
     * @type {string}
     * @memberof ApiV1LoginPost200ResponseDataAllOf
     */
    token?: string;
}
/**
 * Check if a given object implements the ApiV1LoginPost200ResponseDataAllOf interface.
 */
export declare function instanceOfApiV1LoginPost200ResponseDataAllOf(value: object): boolean;
export declare function ApiV1LoginPost200ResponseDataAllOfFromJSON(json: any): ApiV1LoginPost200ResponseDataAllOf;
export declare function ApiV1LoginPost200ResponseDataAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiV1LoginPost200ResponseDataAllOf;
export declare function ApiV1LoginPost200ResponseDataAllOfToJSON(value?: ApiV1LoginPost200ResponseDataAllOf | null): any;
