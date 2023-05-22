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
import type { AuthSession } from './AuthSession';
/**
 *
 * @export
 * @interface ApiV1SessionsGet200Response
 */
export interface ApiV1SessionsGet200Response {
    /**
     *
     * @type {Array<AuthSession>}
     * @memberof ApiV1SessionsGet200Response
     */
    data?: Array<AuthSession>;
    /**
     *
     * @type {object}
     * @memberof ApiV1SessionsGet200Response
     */
    fiberMap?: object;
    /**
     *
     * @type {string}
     * @memberof ApiV1SessionsGet200Response
     */
    status?: string;
}
/**
 * Check if a given object implements the ApiV1SessionsGet200Response interface.
 */
export declare function instanceOfApiV1SessionsGet200Response(value: object): boolean;
export declare function ApiV1SessionsGet200ResponseFromJSON(json: any): ApiV1SessionsGet200Response;
export declare function ApiV1SessionsGet200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiV1SessionsGet200Response;
export declare function ApiV1SessionsGet200ResponseToJSON(value?: ApiV1SessionsGet200Response | null): any;
