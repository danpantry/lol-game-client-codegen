# \AllPlayersApi

All URIs are relative to *https://127.0.0.1:2999*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetLiveclientdataPlayeritems**](AllPlayersApi.md#GetLiveclientdataPlayeritems) | **Get** /liveclientdata/playeritems | Retrieve the list of items for the player
[**GetLiveclientdataPlayerlist**](AllPlayersApi.md#GetLiveclientdataPlayerlist) | **Get** /liveclientdata/playerlist | Retrieve the list of heroes in the game and their stats
[**GetLiveclientdataPlayermainrunes**](AllPlayersApi.md#GetLiveclientdataPlayermainrunes) | **Get** /liveclientdata/playermainrunes | Retrieve the basic runes of any player
[**GetLiveclientdataPlayerscores**](AllPlayersApi.md#GetLiveclientdataPlayerscores) | **Get** /liveclientdata/playerscores | Retrieve the list of the current scores for the player
[**GetLiveclientdataPlayersummonerspells**](AllPlayersApi.md#GetLiveclientdataPlayersummonerspells) | **Get** /liveclientdata/playersummonerspells | Retrieve the list of the summoner spells for the player



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


## GetLiveclientdataPlayerscores

> map[string]map[string]interface{} GetLiveclientdataPlayerscores(ctx, summonerName)

Retrieve the list of the current scores for the player

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


## GetLiveclientdataPlayersummonerspells

> map[string]map[string]interface{} GetLiveclientdataPlayersummonerspells(ctx, summonerName)

Retrieve the list of the summoner spells for the player

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

