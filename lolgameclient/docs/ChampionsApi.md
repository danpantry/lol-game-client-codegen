# \ChampionsApi

All URIs are relative to *https://127.0.0.1:2999*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetLiveclientdataActiveplayer**](ChampionsApi.md#GetLiveclientdataActiveplayer) | **Get** /liveclientdata/activeplayer | Get all data about the active player
[**GetLiveclientdataActiveplayerabilities**](ChampionsApi.md#GetLiveclientdataActiveplayerabilities) | **Get** /liveclientdata/activeplayerabilities | Get Abilities for the active player
[**GetLiveclientdataEventdata**](ChampionsApi.md#GetLiveclientdataEventdata) | **Get** /liveclientdata/eventdata | Get a list of events that have occurred in the game
[**GetLiveclientdataPlayerlist**](ChampionsApi.md#GetLiveclientdataPlayerlist) | **Get** /liveclientdata/playerlist | Retrieve the list of heroes in the game and their stats



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

