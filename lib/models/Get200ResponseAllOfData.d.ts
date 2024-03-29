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
 * @interface Get200ResponseAllOfData
 */
export interface Get200ResponseAllOfData {
    /**
     *
     * @type {string}
     * @memberof Get200ResponseAllOfData
     */
    message?: string;
}
/**
 * Check if a given object implements the Get200ResponseAllOfData interface.
 */
export declare function instanceOfGet200ResponseAllOfData(value: object): boolean;
export declare function Get200ResponseAllOfDataFromJSON(json: any): Get200ResponseAllOfData;
export declare function Get200ResponseAllOfDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): Get200ResponseAllOfData;
export declare function Get200ResponseAllOfDataToJSON(value?: Get200ResponseAllOfData | null): any;
