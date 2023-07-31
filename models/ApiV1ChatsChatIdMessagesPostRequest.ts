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
    cryptAlgorithm?: string;
    /**
     * 
     * @type {string}
     * @memberof ApiV1ChatsChatIdMessagesPostRequest
     */
    mime?: string;
    /**
     * 
     * @type {string}
     * @memberof ApiV1ChatsChatIdMessagesPostRequest
     */
    text?: string;
}

/**
 * Check if a given object implements the ApiV1ChatsChatIdMessagesPostRequest interface.
 */
export function instanceOfApiV1ChatsChatIdMessagesPostRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ApiV1ChatsChatIdMessagesPostRequestFromJSON(json: any): ApiV1ChatsChatIdMessagesPostRequest {
    return ApiV1ChatsChatIdMessagesPostRequestFromJSONTyped(json, false);
}

export function ApiV1ChatsChatIdMessagesPostRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiV1ChatsChatIdMessagesPostRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'clientSideId': !exists(json, 'client_side_id') ? undefined : json['client_side_id'],
        'compressAlgorithm': !exists(json, 'compress_algorithm') ? undefined : json['compress_algorithm'],
        'cryptAlgorithm': !exists(json, 'crypt_algorithm') ? undefined : json['crypt_algorithm'],
        'mime': !exists(json, 'mime') ? undefined : json['mime'],
        'text': !exists(json, 'text') ? undefined : json['text'],
    };
}

export function ApiV1ChatsChatIdMessagesPostRequestToJSON(value?: ApiV1ChatsChatIdMessagesPostRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'client_side_id': value.clientSideId,
        'compress_algorithm': value.compressAlgorithm,
        'crypt_algorithm': value.cryptAlgorithm,
        'mime': value.mime,
        'text': value.text,
    };
}

