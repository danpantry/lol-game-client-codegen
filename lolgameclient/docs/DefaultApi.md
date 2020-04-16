# \DefaultApi

All URIs are relative to *https://127.0.0.1:2999*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetLiveclientdataActiveplayer**](DefaultApi.md#GetLiveclientdataActiveplayer) | **Get** /liveclientdata/activeplayer | Get all data about the active player
[**GetLiveclientdataActiveplayerabilities**](DefaultApi.md#GetLiveclientdataActiveplayerabilities) | **Get** /liveclientdata/activeplayerabilities | Get Abilities for the active player
[**GetLiveclientdataActiveplayername**](DefaultApi.md#GetLiveclientdataActiveplayername) | **Get** /liveclientdata/activeplayername | Returns the player name
[**GetLiveclientdataActiveplayerrunes**](DefaultApi.md#GetLiveclientdataActiveplayerrunes) | **Get** /liveclientdata/activeplayerrunes | Retrieve the full list of runes for the active player
[**GetLiveclientdataAllgamedata**](DefaultApi.md#GetLiveclientdataAllgamedata) | **Get** /liveclientdata/allgamedata | Get all available data
[**GetLiveclientdataEventdata**](DefaultApi.md#GetLiveclientdataEventdata) | **Get** /liveclientdata/eventdata | Get a list of events that have occurred in the game
[**GetLiveclientdataGamestats**](DefaultApi.md#GetLiveclientdataGamestats) | **Get** /liveclientdata/gamestats | Basic data about the game
[**GetLiveclientdataPlayeritems**](DefaultApi.md#GetLiveclientdataPlayeritems) | **Get** /liveclientdata/playeritems | Retrieve the list of items for the player
[**GetLiveclientdataPlayerlist**](DefaultApi.md#GetLiveclientdataPlayerlist) | **Get** /liveclientdata/playerlist | Retrieve the list of heroes in the game and their stats
[**GetLiveclientdataPlayermainrunes**](DefaultApi.md#GetLiveclientdataPlayermainrunes) | **Get** /liveclientdata/playermainrunes | Retrieve the basic runes of any player
[**GetLiveclientdataPlayerscores**](DefaultApi.md#GetLiveclientdataPlayerscores) | **Get** /liveclientdata/playerscores | Retrieve the list of the current scores for the player
[**GetLiveclientdataPlayersummonerspells**](DefaultApi.md#GetLiveclientdataPlayersummonerspells) | **Get** /liveclientdata/playersummonerspells | Retrieve the list of the summoner spells for the player



## GetLiveclientdataActiveplayer

> map[string]map[string]interface{} GetLiveclientdataActiveplayer(ctx, )

Get all data about the active player

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


## GetLiveclientdataActiveplayerabilities

> map[string]map[string]interface{} GetLiveclientdataActiveplayerabilities(ctx, )

Get Abilities for the active player

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


## GetLiveclientdataActiveplayername

> string GetLiveclientdataActiveplayername(ctx, )

Returns the player name

### Required Parameters

This endpoint does not need any parameter.

### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


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


## GetLiveclientdataAllgamedata

> map[string]map[string]interface{} GetLiveclientdataAllgamedata(ctx, optional)

Get all available data

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
 **optional** | ***GetLiveclientdataAllgamedataOpts** | optional parameters | nil if no parameters

### Optional Parameters

Optional parameters are passed through a pointer to a GetLiveclientdataAllgamedataOpts struct


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


## GetLiveclientdataGamestats

> map[string]map[string]interface{} GetLiveclientdataGamestats(ctx, )

Basic data about the game

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

