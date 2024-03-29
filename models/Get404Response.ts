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
 * @interface Get404Response
 */
export interface Get404Response {
    /**
     * 
     * @type {string}
     * @memberof Get404Response
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof Get404Response
     */
    type?: string;
}

/**
 * Check if a given object implements the Get404Response interface.
 */
export function instanceOfGet404Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function Get404ResponseFromJSON(json: any): Get404Response {
    return Get404ResponseFromJSONTyped(json, false);
}

export function Get404ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): Get404Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'type': !exists(json, 'type') ? undefined : json['type'],
    };
}

export function Get404ResponseToJSON(value?: Get404Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'status': value.status,
        'type': value.type,
    };
}

