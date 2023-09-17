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


import * as runtime from '../runtime';
import type {
  ApiV1ChatsChatIdMessagesGet200Response,
  ApiV1ChatsChatIdMessagesPost200Response,
  ApiV1ChatsChatIdMessagesPostRequest,
} from '../models/index';
import {
    ApiV1ChatsChatIdMessagesGet200ResponseFromJSON,
    ApiV1ChatsChatIdMessagesGet200ResponseToJSON,
    ApiV1ChatsChatIdMessagesPost200ResponseFromJSON,
    ApiV1ChatsChatIdMessagesPost200ResponseToJSON,
    ApiV1ChatsChatIdMessagesPostRequestFromJSON,
    ApiV1ChatsChatIdMessagesPostRequestToJSON,
} from '../models/index';

export interface ApiV1ChatsChatIdMessagesGetRequest {
    chatId: string;
    limit: number;
    offset: number;
}

export interface ApiV1ChatsChatIdMessagesMessageIdContentGetRequest {
    chatId: string;
    messageId: string;
}

export interface ApiV1ChatsChatIdMessagesMessageIdGetRequest {
    chatId: string;
    messageId: string;
}

export interface ApiV1ChatsChatIdMessagesPostOperationRequest {
    chatId: string;
    payload: ApiV1ChatsChatIdMessagesPostRequest;
}

/**
 * 
 */
export class MessagingApi extends runtime.BaseAPI {

    /**
     * Get chat messages
     */
    async apiV1ChatsChatIdMessagesGetRaw(requestParameters: ApiV1ChatsChatIdMessagesGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApiV1ChatsChatIdMessagesGet200Response>> {
        if (requestParameters.chatId === null || requestParameters.chatId === undefined) {
            throw new runtime.RequiredError('chatId','Required parameter requestParameters.chatId was null or undefined when calling apiV1ChatsChatIdMessagesGet.');
        }

        if (requestParameters.limit === null || requestParameters.limit === undefined) {
            throw new runtime.RequiredError('limit','Required parameter requestParameters.limit was null or undefined when calling apiV1ChatsChatIdMessagesGet.');
        }

        if (requestParameters.offset === null || requestParameters.offset === undefined) {
            throw new runtime.RequiredError('offset','Required parameter requestParameters.offset was null or undefined when calling apiV1ChatsChatIdMessagesGet.');
        }

        const queryParameters: any = {};

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/api/v1/chats/{chat_id}/messages`.replace(`{${"chat_id"}}`, encodeURIComponent(String(requestParameters.chatId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ApiV1ChatsChatIdMessagesGet200ResponseFromJSON(jsonValue));
    }

    /**
     * Get chat messages
     */
    async apiV1ChatsChatIdMessagesGet(requestParameters: ApiV1ChatsChatIdMessagesGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApiV1ChatsChatIdMessagesGet200Response> {
        const response = await this.apiV1ChatsChatIdMessagesGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get message content in specific chat
     */
    async apiV1ChatsChatIdMessagesMessageIdContentGetRaw(requestParameters: ApiV1ChatsChatIdMessagesMessageIdContentGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.chatId === null || requestParameters.chatId === undefined) {
            throw new runtime.RequiredError('chatId','Required parameter requestParameters.chatId was null or undefined when calling apiV1ChatsChatIdMessagesMessageIdContentGet.');
        }

        if (requestParameters.messageId === null || requestParameters.messageId === undefined) {
            throw new runtime.RequiredError('messageId','Required parameter requestParameters.messageId was null or undefined when calling apiV1ChatsChatIdMessagesMessageIdContentGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["token"] = this.configuration.apiKey("token"); // QueryApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/api/v1/chats/{chat_id}/messages/{message_id}/content`.replace(`{${"chat_id"}}`, encodeURIComponent(String(requestParameters.chatId))).replace(`{${"message_id"}}`, encodeURIComponent(String(requestParameters.messageId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Get message content in specific chat
     */
    async apiV1ChatsChatIdMessagesMessageIdContentGet(requestParameters: ApiV1ChatsChatIdMessagesMessageIdContentGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.apiV1ChatsChatIdMessagesMessageIdContentGetRaw(requestParameters, initOverrides);
    }

    /**
     * Get message in specific chat
     */
    async apiV1ChatsChatIdMessagesMessageIdGetRaw(requestParameters: ApiV1ChatsChatIdMessagesMessageIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApiV1ChatsChatIdMessagesPost200Response>> {
        if (requestParameters.chatId === null || requestParameters.chatId === undefined) {
            throw new runtime.RequiredError('chatId','Required parameter requestParameters.chatId was null or undefined when calling apiV1ChatsChatIdMessagesMessageIdGet.');
        }

        if (requestParameters.messageId === null || requestParameters.messageId === undefined) {
            throw new runtime.RequiredError('messageId','Required parameter requestParameters.messageId was null or undefined when calling apiV1ChatsChatIdMessagesMessageIdGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/api/v1/chats/{chat_id}/messages/{message_id}`.replace(`{${"chat_id"}}`, encodeURIComponent(String(requestParameters.chatId))).replace(`{${"message_id"}}`, encodeURIComponent(String(requestParameters.messageId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ApiV1ChatsChatIdMessagesPost200ResponseFromJSON(jsonValue));
    }

    /**
     * Get message in specific chat
     */
    async apiV1ChatsChatIdMessagesMessageIdGet(requestParameters: ApiV1ChatsChatIdMessagesMessageIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApiV1ChatsChatIdMessagesPost200Response> {
        const response = await this.apiV1ChatsChatIdMessagesMessageIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Possible crypt_algorithm: \"none\", \"aes-256-cbc\". Possible compress_algorithm: \"none\", \"zlib-deflate\". <br> Mime must be a valid mime type. Available mime type you cat find here: https://github.com/gabriel-vasile/mimetype/blob/master/supported_mimes.md
     * Send message in specific chat
     */
    async apiV1ChatsChatIdMessagesPostRaw(requestParameters: ApiV1ChatsChatIdMessagesPostOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApiV1ChatsChatIdMessagesPost200Response>> {
        if (requestParameters.chatId === null || requestParameters.chatId === undefined) {
            throw new runtime.RequiredError('chatId','Required parameter requestParameters.chatId was null or undefined when calling apiV1ChatsChatIdMessagesPost.');
        }

        if (requestParameters.payload === null || requestParameters.payload === undefined) {
            throw new runtime.RequiredError('payload','Required parameter requestParameters.payload was null or undefined when calling apiV1ChatsChatIdMessagesPost.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/api/v1/chats/{chat_id}/messages`.replace(`{${"chat_id"}}`, encodeURIComponent(String(requestParameters.chatId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ApiV1ChatsChatIdMessagesPostRequestToJSON(requestParameters.payload),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ApiV1ChatsChatIdMessagesPost200ResponseFromJSON(jsonValue));
    }

    /**
     * Possible crypt_algorithm: \"none\", \"aes-256-cbc\". Possible compress_algorithm: \"none\", \"zlib-deflate\". <br> Mime must be a valid mime type. Available mime type you cat find here: https://github.com/gabriel-vasile/mimetype/blob/master/supported_mimes.md
     * Send message in specific chat
     */
    async apiV1ChatsChatIdMessagesPost(requestParameters: ApiV1ChatsChatIdMessagesPostOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApiV1ChatsChatIdMessagesPost200Response> {
        const response = await this.apiV1ChatsChatIdMessagesPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
