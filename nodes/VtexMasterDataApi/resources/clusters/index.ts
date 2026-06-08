import type { INodeProperties } from 'n8n-workflow';

export const clustersDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Clusters"
					]
				}
			},
			"options": [
				{
					"name": "Validatedocumentbyclusters",
					"value": "Validatedocumentbyclusters",
					"action": "Validate document by clusters",
					"description": "Check if a document is present in one or more clusters (specific set of field values).\r\n\r\n> There is a limit of five rules per request.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/dataentities/{{$parameter[\"dataEntityName\"]}}/documents/{{$parameter[\"id\"]}}/clusters"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /api/dataentities/{dataEntityName}/documents/{id}/clusters",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Clusters"
					],
					"operation": [
						"Validatedocumentbyclusters"
					]
				}
			}
		},
		{
			"displayName": "Data Entity Name",
			"name": "dataEntityName",
			"required": true,
			"description": "Name of the data entity. Defined by the api. Examples of native data entities you can use are `CL` for client profiles and `AD` for client addresses.",
			"default": "Client",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Clusters"
					],
					"operation": [
						"Validatedocumentbyclusters"
					]
				}
			}
		},
		{
			"displayName": "Accept",
			"name": "Accept",
			"required": true,
			"description": "HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.",
			"default": "application/json",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Clusters"
					],
					"operation": [
						"Validatedocumentbyclusters"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "ID of the Document.",
			"default": "Client-b818cbda-e489-11e6-94f4-0ac138d2d42e",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Clusters"
					],
					"operation": [
						"Validatedocumentbyclusters"
					]
				}
			}
		},
		{
			"displayName": "POST /api/dataentities/{dataEntityName}/documents/{id}/clusters<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Clusters"
					],
					"operation": [
						"Validatedocumentbyclusters"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Key (Header)",
			"name": "security_appkey",
			"type": "string",
			"default": "",
			"description": "API key for appKey (header: X-VTEX-API-AppKey)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppKey": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Clusters"
					],
					"operation": [
						"Validatedocumentbyclusters"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Token (Header)",
			"name": "security_apptoken",
			"type": "string",
			"default": "",
			"description": "API key for appToken (header: X-VTEX-API-AppToken)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppToken": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Clusters"
					],
					"operation": [
						"Validatedocumentbyclusters"
					]
				}
			}
		},
];
