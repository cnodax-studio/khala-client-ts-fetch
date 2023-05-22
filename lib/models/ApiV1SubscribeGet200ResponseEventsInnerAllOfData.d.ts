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
 * @interface ApiV1SubscribeGet200ResponseEventsInnerAllOfData
 */
export interface ApiV1SubscribeGet200ResponseEventsInnerAllOfData {
    /**
     *
     * @type {MessageMessage}
     * @memberof ApiV1SubscribeGet200ResponseEventsInnerAllOfData
     */
    message?: MessageMessage;
}
/**
 * Check if a given object implements the ApiV1SubscribeGet200ResponseEventsInnerAllOfData interface.
 */
export declare function instanceOfApiV1SubscribeGet200ResponseEventsInnerAllOfData(value: object): boolean;
export declare function ApiV1SubscribeGet200ResponseEventsInnerAllOfDataFromJSON(json: any): ApiV1SubscribeGet200ResponseEventsInnerAllOfData;
export declare function ApiV1SubscribeGet200ResponseEventsInnerAllOfDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiV1SubscribeGet200ResponseEventsInnerAllOfData;
export declare function ApiV1SubscribeGet200ResponseEventsInnerAllOfDataToJSON(value?: ApiV1SubscribeGet200ResponseEventsInnerAllOfData | null): any;
