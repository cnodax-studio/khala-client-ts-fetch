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
  ApiV1ChatsChatIdInvitePost200Response,
  ApiV1PushWebServerPublicKeyGet200Response,
  ApiV1PushWebSubscribePostRequest,
  Get404Response,
} from '../models';
import {
    ApiV1ChatsChatIdInvitePost200ResponseFromJSON,
    ApiV1ChatsChatIdInvitePost200ResponseToJSON,
    ApiV1PushWebServerPublicKeyGet200ResponseFromJSON,
    ApiV1PushWebServerPublicKeyGet200ResponseToJSON,
    ApiV1PushWebSubscribePostRequestFromJSON,
    ApiV1PushWebSubscribePostRequestToJSON,
    Get404ResponseFromJSON,
    Get404ResponseToJSON,
} from '../models';

export interface ApiV1PushWebSubscribePostOperationRequest {
    payload: ApiV1PushWebSubscribePostRequest;
}

/**
 * 
 */
export class PushApi extends runtime.BaseAPI {

    /**
     * Retrieve VAPID public key for PUSH notification
     */
    async apiV1PushWebServerPublicKeyGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApiV1PushWebServerPublicKeyGet200Response>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/api/v1/push/web/server/public-key`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ApiV1PushWebServerPublicKeyGet200ResponseFromJSON(jsonValue));
    }

    /**
     * Retrieve VAPID public key for PUSH notification
     */
    async apiV1PushWebServerPublicKeyGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApiV1PushWebServerPublicKeyGet200Response> {
        const response = await this.apiV1PushWebServerPublicKeyGetRaw(initOverrides);
        return await response.value();
    }

    /**
     * Subscribe to web PUSH notifications
     */
    async apiV1PushWebSubscribePostRaw(requestParameters: ApiV1PushWebSubscribePostOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApiV1ChatsChatIdInvitePost200Response>> {
        if (requestParameters.payload === null || requestParameters.payload === undefined) {
            throw new runtime.RequiredError('payload','Required parameter requestParameters.payload was null or undefined when calling apiV1PushWebSubscribePost.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/api/v1/push/web/subscribe`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ApiV1PushWebSubscribePostRequestToJSON(requestParameters.payload),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ApiV1ChatsChatIdInvitePost200ResponseFromJSON(jsonValue));
    }

    /**
     * Subscribe to web PUSH notifications
     */
    async apiV1PushWebSubscribePost(requestParameters: ApiV1PushWebSubscribePostOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApiV1ChatsChatIdInvitePost200Response> {
        const response = await this.apiV1PushWebSubscribePostRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
