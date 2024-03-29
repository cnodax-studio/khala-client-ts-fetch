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
/**
 *
 * @export
 * @interface AuthUser
 */
export interface AuthUser {
    /**
     *
     * @type {string}
     * @memberof AuthUser
     */
    id?: string;
    /**
     *
     * @type {string}
     * @memberof AuthUser
     */
    login?: string;
    /**
     *
     * @type {string}
     * @memberof AuthUser
     */
    name?: string;
}
/**
 * Check if a given object implements the AuthUser interface.
 */
export declare function instanceOfAuthUser(value: object): boolean;
export declare function AuthUserFromJSON(json: any): AuthUser;
export declare function AuthUserFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthUser;
export declare function AuthUserToJSON(value?: AuthUser | null): any;
