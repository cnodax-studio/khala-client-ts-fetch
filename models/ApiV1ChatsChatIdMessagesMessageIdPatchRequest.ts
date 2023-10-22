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
 * @interface ApiV1ChatsChatIdMessagesMessageIdPatchRequest
 */
export interface ApiV1ChatsChatIdMessagesMessageIdPatchRequest {
    /**
     * 
     * @type {string}
     * @memberof ApiV1ChatsChatIdMessagesMessageIdPatchRequest
     */
    clientSideId?: string;
    /**
     * 
     * @type {string}
     * @memberof ApiV1ChatsChatIdMessagesMessageIdPatchRequest
     */
    compressAlgorithm?: string;
    /**
     * 
     * @type {string}
     * @memberof ApiV1ChatsChatIdMessagesMessageIdPatchRequest
     */
    content?: string;
    /**
     * 
     * @type {string}
     * @memberof ApiV1ChatsChatIdMessagesMessageIdPatchRequest
     */
    cryptAlgorithm?: string;
}

/**
 * Check if a given object implements the ApiV1ChatsChatIdMessagesMessageIdPatchRequest interface.
 */
export function instanceOfApiV1ChatsChatIdMessagesMessageIdPatchRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ApiV1ChatsChatIdMessagesMessageIdPatchRequestFromJSON(json: any): ApiV1ChatsChatIdMessagesMessageIdPatchRequest {
    return ApiV1ChatsChatIdMessagesMessageIdPatchRequestFromJSONTyped(json, false);
}

export function ApiV1ChatsChatIdMessagesMessageIdPatchRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiV1ChatsChatIdMessagesMessageIdPatchRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'clientSideId': !exists(json, 'client_side_id') ? undefined : json['client_side_id'],
        'compressAlgorithm': !exists(json, 'compress_algorithm') ? undefined : json['compress_algorithm'],
        'content': !exists(json, 'content') ? undefined : json['content'],
        'cryptAlgorithm': !exists(json, 'crypt_algorithm') ? undefined : json['crypt_algorithm'],
    };
}

export function ApiV1ChatsChatIdMessagesMessageIdPatchRequestToJSON(value?: ApiV1ChatsChatIdMessagesMessageIdPatchRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'client_side_id': value.clientSideId,
        'compress_algorithm': value.compressAlgorithm,
        'content': value.content,
        'crypt_algorithm': value.cryptAlgorithm,
    };
}

