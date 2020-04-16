# \RunesApi

All URIs are relative to *https://127.0.0.1:2999*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetLiveclientdataActiveplayerrunes**](RunesApi.md#GetLiveclientdataActiveplayerrunes) | **Get** /liveclientdata/activeplayerrunes | Retrieve the full list of runes for the active player
[**GetLiveclientdataPlayermainrunes**](RunesApi.md#GetLiveclientdataPlayermainrunes) | **Get** /liveclientdata/playermainrunes | Retrieve the basic runes of any player



## GetLiveclientdataActiveplayerrunes

> map[string]map[string]interface{} GetLiveclientdataActiveplayerrunes(ctx, )

Retrieve the full list of runes for the active player

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


## GetLiveclientdataPlayermainrunes

> map[string]map[string]interface{} GetLiveclientdataPlayermainrunes(ctx, summonerName)

Retrieve the basic runes of any player

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

