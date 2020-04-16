# \EventsApi

All URIs are relative to *https://127.0.0.1:2999*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetLiveclientdataEventdata**](EventsApi.md#GetLiveclientdataEventdata) | **Get** /liveclientdata/eventdata | Get a list of events that have occurred in the game



## GetLiveclientdataEventdata

> map[string]map[string]interface{} GetLiveclientdataEventdata(ctx, optional)

Get a list of events that have occurred in the game

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
 **optional** | ***GetLiveclientdataEventdataOpts** | optional parameters | nil if no parameters

### Optional Parameters

Optional parameters are passed through a pointer to a GetLiveclientdataEventdataOpts struct


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventID** | **optional.Int32**| ID of the next event you expect to see | 

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

