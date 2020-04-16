# \ItemsApi

All URIs are relative to *https://127.0.0.1:2999*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetLiveclientdataPlayeritems**](ItemsApi.md#GetLiveclientdataPlayeritems) | **Get** /liveclientdata/playeritems | Retrieve the list of items for the player



## GetLiveclientdataPlayeritems

> map[string]map[string]interface{} GetLiveclientdataPlayeritems(ctx, summonerName)

Retrieve the list of items for the player

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**summonerName** | **string**| Summoner name of player | 

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

