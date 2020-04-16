# \BuiltinApi

All URIs are relative to *https://127.0.0.1:2999*

Method | HTTP request | Description
------------- | ------------- | -------------
[**AsyncDelete**](BuiltinApi.md#AsyncDelete) | **Post** /AsyncDelete | Cancels the asynchronous operation or removes its completion status.
[**AsyncResult**](BuiltinApi.md#AsyncResult) | **Post** /AsyncResult | Retrieves the result of a completed asynchronous operation.
[**AsyncStatus**](BuiltinApi.md#AsyncStatus) | **Post** /AsyncStatus | Retrieves details on the current state of an asynchronous operation.
[**Cancel**](BuiltinApi.md#Cancel) | **Post** /Cancel | Attempts to cancel an asynchronous operation
[**Exit**](BuiltinApi.md#Exit) | **Post** /Exit | Closes the connection.
[**Help**](BuiltinApi.md#Help) | **Post** /Help | Returns information on available functions and types
[**HttpApiDeclarationV1**](BuiltinApi.md#HttpApiDeclarationV1) | **Get** /swagger/v1/api-docs/{api} | Retrieves the API declaration for a supported API
[**HttpApiDocsV1**](BuiltinApi.md#HttpApiDocsV1) | **Get** /swagger/v1/api-docs | Retrieves the API documentation resource listing
[**HttpApiDocsV2**](BuiltinApi.md#HttpApiDocsV2) | **Get** /swagger/v2/swagger.json | Retrieves the API documentation
[**HttpApiDocsV3**](BuiltinApi.md#HttpApiDocsV3) | **Get** /swagger/v3/openapi.json | Retrieves the API documentation
[**HttpAsyncDelete**](BuiltinApi.md#HttpAsyncDelete) | **Delete** /async/v1/status/{asyncToken} | Cancels the asynchronous operation or removes its completion status.
[**HttpAsyncResult**](BuiltinApi.md#HttpAsyncResult) | **Get** /async/v1/result/{asyncToken} | Retrieves the result of a completed asynchronous operation.
[**HttpAsyncStatus**](BuiltinApi.md#HttpAsyncStatus) | **Get** /async/v1/status/{asyncToken} | Retrieves details on the current state of an asynchronous operation.
[**Subscribe**](BuiltinApi.md#Subscribe) | **Post** /Subscribe | Subscribes to a given event
[**Unsubscribe**](BuiltinApi.md#Unsubscribe) | **Post** /Unsubscribe | Unsubscribes from a given event



## AsyncDelete

> map[string]map[string]interface{} AsyncDelete(ctx, asyncToken)

Cancels the asynchronous operation or removes its completion status.

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**asyncToken** | **int32**| ID of the asynchronous operation to remove | 

### Return type

**map[string]map[string]interface{}**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## AsyncResult

> map[string]map[string]interface{} AsyncResult(ctx, asyncToken)

Retrieves the result of a completed asynchronous operation.

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**asyncToken** | **int32**| ID of the asynchronous operation to check | 

### Return type

**map[string]map[string]interface{}**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## AsyncStatus

> map[string]map[string]interface{} AsyncStatus(ctx, asyncToken)

Retrieves details on the current state of an asynchronous operation.

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**asyncToken** | **int32**| ID of the asynchronous operation to check | 

### Return type

**map[string]map[string]interface{}**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## Cancel

> map[string]map[string]interface{} Cancel(ctx, asyncToken)

Attempts to cancel an asynchronous operation

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**asyncToken** | **int32**| Operation to cancel | 

### Return type

**map[string]map[string]interface{}**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## Exit

> map[string]map[string]interface{} Exit(ctx, )

Closes the connection.

### Required Parameters

This endpoint does not need any parameter.

### Return type

**map[string]map[string]interface{}**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## Help

> map[string]map[string]interface{} Help(ctx, optional)

Returns information on available functions and types

With no arguments, returns a list of all available functions and types along with a short description. If a function or type is specified, returns detailed information about it.

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
 **optional** | ***HelpOpts** | optional parameters | nil if no parameters

### Optional Parameters

Optional parameters are passed through a pointer to a HelpOpts struct


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **target** | **optional.String**| Name of the function or type to describe | 
 **format** | **optional.String**| Format for returned information | 

### Return type

**map[string]map[string]interface{}**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## HttpApiDeclarationV1

> map[string]map[string]interface{} HttpApiDeclarationV1(ctx, api)

Retrieves the API declaration for a supported API

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**api** | **string**| API to get a declaration for | 

### Return type

**map[string]map[string]interface{}**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## HttpApiDocsV1

> map[string]map[string]interface{} HttpApiDocsV1(ctx, )

Retrieves the API documentation resource listing

### Required Parameters

This endpoint does not need any parameter.

### Return type

**map[string]map[string]interface{}**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## HttpApiDocsV2

> map[string]map[string]interface{} HttpApiDocsV2(ctx, )

Retrieves the API documentation

### Required Parameters

This endpoint does not need any parameter.

### Return type

**map[string]map[string]interface{}**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## HttpApiDocsV3

> map[string]map[string]interface{} HttpApiDocsV3(ctx, )

Retrieves the API documentation

### Required Parameters

This endpoint does not need any parameter.

### Return type

**map[string]map[string]interface{}**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## HttpAsyncDelete

> map[string]map[string]interface{} HttpAsyncDelete(ctx, asyncToken)

Cancels the asynchronous operation or removes its completion status.

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**asyncToken** | **int32**| ID of the asynchronous operation to remove | 

### Return type

**map[string]map[string]interface{}**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## HttpAsyncResult

> map[string]map[string]interface{} HttpAsyncResult(ctx, asyncToken)

Retrieves the result of a completed asynchronous operation.

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**asyncToken** | **int32**| ID of the asynchronous operation to check | 

### Return type

**map[string]map[string]interface{}**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## HttpAsyncStatus

> map[string]map[string]interface{} HttpAsyncStatus(ctx, asyncToken)

Retrieves details on the current state of an asynchronous operation.

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**asyncToken** | **int32**| ID of the asynchronous operation to check | 

### Return type

**map[string]map[string]interface{}**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## Subscribe

> map[string]map[string]interface{} Subscribe(ctx, eventName, optional)

Subscribes to a given event

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**eventName** | **string**| Name of the event to subscribe to | 
 **optional** | ***SubscribeOpts** | optional parameters | nil if no parameters

### Optional Parameters

Optional parameters are passed through a pointer to a SubscribeOpts struct


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **format** | **optional.String**| Desired format to receive events in. If unspecified, events will be sent in the active result format at the time. | 

### Return type

**map[string]map[string]interface{}**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## Unsubscribe

> map[string]map[string]interface{} Unsubscribe(ctx, eventName)

Unsubscribes from a given event

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**eventName** | **string**| Name of the event to unsubscribe from | 

### Return type

**map[string]map[string]interface{}**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

