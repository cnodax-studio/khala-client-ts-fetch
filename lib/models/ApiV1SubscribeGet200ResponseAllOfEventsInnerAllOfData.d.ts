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
 * @interface ApiV1SubscribeGet200ResponseAllOfEventsInnerAllOfData
 */
export interface ApiV1SubscribeGet200ResponseAllOfEventsInnerAllOfData {
    /**
     *
     * @type {MessageMessage}
     * @memberof ApiV1SubscribeGet200ResponseAllOfEventsInnerAllOfData
     */
    message?: MessageMessage;
}
/**
 * Check if a given object implements the ApiV1SubscribeGet200ResponseAllOfEventsInnerAllOfData interface.
 */
export declare function instanceOfApiV1SubscribeGet200ResponseAllOfEventsInnerAllOfData(value: object): boolean;
export declare function ApiV1SubscribeGet200ResponseAllOfEventsInnerAllOfDataFromJSON(json: any): ApiV1SubscribeGet200ResponseAllOfEventsInnerAllOfData;
export declare function ApiV1SubscribeGet200ResponseAllOfEventsInnerAllOfDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiV1SubscribeGet200ResponseAllOfEventsInnerAllOfData;
export declare function ApiV1SubscribeGet200ResponseAllOfEventsInnerAllOfDataToJSON(value?: ApiV1SubscribeGet200ResponseAllOfEventsInnerAllOfData | null): any;
