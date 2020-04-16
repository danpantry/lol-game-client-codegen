/*
 * LoLClient
 *
 * League of Legends Game Client
 *
 * API version: 1.0.0
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package openapi
// BindingGenericEvent Represents generic data for an event.
type BindingGenericEvent struct {
	// Event data
	Data map[string]map[string]interface{} `json:"data,omitempty"`
}