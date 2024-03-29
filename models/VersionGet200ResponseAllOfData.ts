/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
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
export function instanceOfVersionGet200ResponseAllOfData(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function VersionGet200ResponseAllOfDataFromJSON(json: any): VersionGet200ResponseAllOfData {
    return VersionGet200ResponseAllOfDataFromJSONTyped(json, false);
}

export function VersionGet200ResponseAllOfDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): VersionGet200ResponseAllOfData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'build': !exists(json, 'build') ? undefined : json['build'],
        'subject': !exists(json, 'subject') ? undefined : json['subject'],
        'version': !exists(json, 'version') ? undefined : json['version'],
    };
}

export function VersionGet200ResponseAllOfDataToJSON(value?: VersionGet200ResponseAllOfData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'build': value.build,
        'subject': value.subject,
        'version': value.version,
    };
}

