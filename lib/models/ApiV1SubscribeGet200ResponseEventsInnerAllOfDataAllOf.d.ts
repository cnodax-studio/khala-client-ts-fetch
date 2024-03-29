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
import type { MessageMessage } from './MessageMessage';
/**
 *
 * @export
 * @interface ApiV1SubscribeGet200ResponseEventsInnerAllOfDataAllOf
 */
export interface ApiV1SubscribeGet200ResponseEventsInnerAllOfDataAllOf {
    /**
     *
     * @type {MessageMessage}
     * @memberof ApiV1SubscribeGet200ResponseEventsInnerAllOfDataAllOf
     */
    message?: MessageMessage;
}
/**
 * Check if a given object implements the ApiV1SubscribeGet200ResponseEventsInnerAllOfDataAllOf interface.
 */
export declare function instanceOfApiV1SubscribeGet200ResponseEventsInnerAllOfDataAllOf(value: object): boolean;
export declare function ApiV1SubscribeGet200ResponseEventsInnerAllOfDataAllOfFromJSON(json: any): ApiV1SubscribeGet200ResponseEventsInnerAllOfDataAllOf;
export declare function ApiV1SubscribeGet200ResponseEventsInnerAllOfDataAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiV1SubscribeGet200ResponseEventsInnerAllOfDataAllOf;
export declare function ApiV1SubscribeGet200ResponseEventsInnerAllOfDataAllOfToJSON(value?: ApiV1SubscribeGet200ResponseEventsInnerAllOfDataAllOf | null): any;
