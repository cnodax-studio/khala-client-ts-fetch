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
 * @interface ApiV1ChatsChatIdMessagesPostRequestAllOf
 */
export interface ApiV1ChatsChatIdMessagesPostRequestAllOf {
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
    content?: string;
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
}

/**
 * Check if a given object implements the ApiV1ChatsChatIdMessagesPostRequestAllOf interface.
 */
export function instanceOfApiV1ChatsChatIdMessagesPostRequestAllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ApiV1ChatsChatIdMessagesPostRequestAllOfFromJSON(json: any): ApiV1ChatsChatIdMessagesPostRequestAllOf {
    return ApiV1ChatsChatIdMessagesPostRequestAllOfFromJSONTyped(json, false);
}

export function ApiV1ChatsChatIdMessagesPostRequestAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiV1ChatsChatIdMessagesPostRequestAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'compressAlgorithm': !exists(json, 'compress_algorithm') ? undefined : json['compress_algorithm'],
        'content': !exists(json, 'content') ? undefined : json['content'],
        'cryptAlgorithm': !exists(json, 'crypt_algorithm') ? undefined : json['crypt_algorithm'],
        'mime': !exists(json, 'mime') ? undefined : json['mime'],
    };
}

export function ApiV1ChatsChatIdMessagesPostRequestAllOfToJSON(value?: ApiV1ChatsChatIdMessagesPostRequestAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'compress_algorithm': value.compressAlgorithm,
        'content': value.content,
        'crypt_algorithm': value.cryptAlgorithm,
        'mime': value.mime,
    };
}

