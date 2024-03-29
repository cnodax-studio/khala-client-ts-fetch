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
 * @interface VersionGet200ResponseAllOfData
 */
export interface VersionGet200ResponseAllOfData {
    /**
     *
     * @type {number}
     * @memberof VersionGet200ResponseAllOfData
     */
    build?: number;
    /**
     *
     * @type {string}
     * @memberof VersionGet200ResponseAllOfData
     */
    subject?: string;
    /**
     *
     * @type {string}
     * @memberof VersionGet200ResponseAllOfData
     */
    version?: string;
}
/**
 * Check if a given object implements the VersionGet200ResponseAllOfData interface.
 */
export declare function instanceOfVersionGet200ResponseAllOfData(value: object): boolean;
export declare function VersionGet200ResponseAllOfDataFromJSON(json: any): VersionGet200ResponseAllOfData;
export declare function VersionGet200ResponseAllOfDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): VersionGet200ResponseAllOfData;
export declare function VersionGet200ResponseAllOfDataToJSON(value?: VersionGet200ResponseAllOfData | null): any;
