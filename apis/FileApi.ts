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
  ApiV1ChatsChatIdFilesPut200Response,
  Get404Response,
} from '../models/index';
import {
    ApiV1ChatsChatIdFilesPut200ResponseFromJSON,
    ApiV1ChatsChatIdFilesPut200ResponseToJSON,
    Get404ResponseFromJSON,
    Get404ResponseToJSON,
} from '../models/index';

export interface ApiV1ChatsChatIdFilesPutRequest {
    chatId: string;
    mime: string;
    file: object;
}

export interface ApiV1FilesPrivateChatIdFileIdGetRequest {
    chatId: string;
    fileId: string;
}

/**
 * 
 */
export class FileApi extends runtime.BaseAPI {

    /**
     * Upload file to specific chat
     */
    async apiV1ChatsChatIdFilesPutRaw(requestParameters: ApiV1ChatsChatIdFilesPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApiV1ChatsChatIdFilesPut200Response>> {
        if (requestParameters.chatId === null || requestParameters.chatId === undefined) {
            throw new runtime.RequiredError('chatId','Required parameter requestParameters.chatId was null or undefined when calling apiV1ChatsChatIdFilesPut.');
        }

        if (requestParameters.mime === null || requestParameters.mime === undefined) {
            throw new runtime.RequiredError('mime','Required parameter requestParameters.mime was null or undefined when calling apiV1ChatsChatIdFilesPut.');
        }

        if (requestParameters.file === null || requestParameters.file === undefined) {
            throw new runtime.RequiredError('file','Required parameter requestParameters.file was null or undefined when calling apiV1ChatsChatIdFilesPut.');
        }

        const queryParameters: any = {};

        if (requestParameters.mime !== undefined) {
            queryParameters['mime'] = requestParameters.mime;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/api/v1/chats/{chat_id}/files`.replace(`{${"chat_id"}}`, encodeURIComponent(String(requestParameters.chatId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.file as any,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ApiV1ChatsChatIdFilesPut200ResponseFromJSON(jsonValue));
    }

    /**
     * Upload file to specific chat
     */
    async apiV1ChatsChatIdFilesPut(requestParameters: ApiV1ChatsChatIdFilesPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApiV1ChatsChatIdFilesPut200Response> {
        const response = await this.apiV1ChatsChatIdFilesPutRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Download chat file
     */
    async apiV1FilesPrivateChatIdFileIdGetRaw(requestParameters: ApiV1FilesPrivateChatIdFileIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.chatId === null || requestParameters.chatId === undefined) {
            throw new runtime.RequiredError('chatId','Required parameter requestParameters.chatId was null or undefined when calling apiV1FilesPrivateChatIdFileIdGet.');
        }

        if (requestParameters.fileId === null || requestParameters.fileId === undefined) {
            throw new runtime.RequiredError('fileId','Required parameter requestParameters.fileId was null or undefined when calling apiV1FilesPrivateChatIdFileIdGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/api/v1/files/private/{chat_id}/{file_id}`.replace(`{${"chat_id"}}`, encodeURIComponent(String(requestParameters.chatId))).replace(`{${"file_id"}}`, encodeURIComponent(String(requestParameters.fileId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Download chat file
     */
    async apiV1FilesPrivateChatIdFileIdGet(requestParameters: ApiV1FilesPrivateChatIdFileIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.apiV1FilesPrivateChatIdFileIdGetRaw(requestParameters, initOverrides);
    }

}
