# \UnitsApi

All URIs are relative to *https://127.0.0.1:2999*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetLiveclientdataPlayerlist**](UnitsApi.md#GetLiveclientdataPlayerlist) | **Get** /liveclientdata/playerlist | Retrieve the list of heroes in the game and their stats



## GetLiveclientdataPlayerlist

> map[string]map[string]interface{} GetLiveclientdataPlayerlist(ctx, optional)

Retrieve the list of heroes in the game and their stats

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
 **optional** | ***GetLiveclientdataPlayerlistOpts** | optional parameters | nil if no parameters

### Optional Parameters

Optional parameters are passed through a pointer to a GetLiveclientdataPlayerlistOpts struct


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamID** | **optional.String**| Heroes team ID. Optional, returns all players on all teams if null.  | 

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

