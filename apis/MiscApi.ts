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
  Get200Response,
  Get404Response,
  VersionGet200Response,
} from '../models';
import {
    Get200ResponseFromJSON,
    Get200ResponseToJSON,
    Get404ResponseFromJSON,
    Get404ResponseToJSON,
    VersionGet200ResponseFromJSON,
    VersionGet200ResponseToJSON,
} from '../models';

/**
 * 
 */
export class MiscApi extends runtime.BaseAPI {

    /**
     * Show server hello message
     */
    async rootGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Get200Response>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => Get200ResponseFromJSON(jsonValue));
    }

    /**
     * Show server hello message
     */
    async rootGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Get200Response> {
        const response = await this.rootGetRaw(initOverrides);
        return await response.value();
    }

    /**
     * Show Swagger UI
     */
    async swaggerGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/swagger`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<string>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Show Swagger UI
     */
    async swaggerGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string> {
        const response = await this.swaggerGetRaw(initOverrides);
        return await response.value();
    }

    /**
     * Show server version
     */
    async versionGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<VersionGet200Response>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/version`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => VersionGet200ResponseFromJSON(jsonValue));
    }

    /**
     * Show server version
     */
    async versionGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<VersionGet200Response> {
        const response = await this.versionGetRaw(initOverrides);
        return await response.value();
    }

}
