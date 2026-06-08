import type { INodeProperties } from 'n8n-workflow';

export const versionsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Versions"
					]
				}
			},
			"options": [
				{
					"name": "Listversions",
					"value": "Listversions",
					"action": "List versions",
					"description": "Allows to list the versions of a document.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/dataentities/{{$parameter[\"dataEntityName\"]}}/documents/{{$parameter[\"id\"]}}/versions"
						}
					}
				},
				{
					"name": "Getversion",
					"value": "Getversion",
					"action": "Get version",
					"description": "Returns the version of a document.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/dataentities/{{$parameter[\"dataEntityName\"]}}/documents/{{$parameter[\"id\"]}}/versions/{{$parameter[\"versionId\"]}}"
						}
					}
				},
				{
					"name": "Putversion",
					"value": "Putversion",
					"action": "Put version",
					"description": "Updates document with version values.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/dataentities/{{$parameter[\"dataEntityName\"]}}/documents/{{$parameter[\"id\"]}}/versions/{{$parameter[\"versionId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/dataentities/{dataEntityName}/documents/{id}/versions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Versions"
					],
					"operation": [
						"Listversions"
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
						"Versions"
					],
					"operation": [
						"Listversions"
					]
				}
			}
		},
		{
			"displayName": "Content Type",
			"name": "Content-Type",
			"required": true,
			"description": "Type of the content being sent.",
			"default": "application/json",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Content-Type": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Versions"
					],
					"operation": [
						"Listversions"
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
						"Versions"
					],
					"operation": [
						"Listversions"
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
						"Versions"
					],
					"operation": [
						"Listversions"
					]
				}
			}
		},
		{
			"displayName": "Load",
			"name": "load",
			"description": "If true, return all the fields in each version of the document",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "load",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Versions"
					],
					"operation": [
						"Listversions"
					]
				}
			}
		},
		{
			"displayName": "Fields",
			"name": "fields",
			"description": "If `load` is true, the response will return only these specific fields",
			"default": "id,dataEntityId,isNewsletterOptIn,createdBy",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Versions"
					],
					"operation": [
						"Listversions"
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
						"Versions"
					],
					"operation": [
						"Listversions"
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
						"Versions"
					],
					"operation": [
						"Listversions"
					]
				}
			}
		},
		{
			"displayName": "GET /api/dataentities/{dataEntityName}/documents/{id}/versions/{versionId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Versions"
					],
					"operation": [
						"Getversion"
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
						"Versions"
					],
					"operation": [
						"Getversion"
					]
				}
			}
		},
		{
			"displayName": "Content Type",
			"name": "Content-Type",
			"required": true,
			"description": "Type of the content being sent.",
			"default": "application/json",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Content-Type": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Versions"
					],
					"operation": [
						"Getversion"
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
						"Versions"
					],
					"operation": [
						"Getversion"
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
						"Versions"
					],
					"operation": [
						"Getversion"
					]
				}
			}
		},
		{
			"displayName": "Version Id",
			"name": "versionId",
			"required": true,
			"description": "ID of the version to update.",
			"default": "123456789abc",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Versions"
					],
					"operation": [
						"Getversion"
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
						"Versions"
					],
					"operation": [
						"Getversion"
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
						"Versions"
					],
					"operation": [
						"Getversion"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/dataentities/{dataEntityName}/documents/{id}/versions/{versionId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Versions"
					],
					"operation": [
						"Putversion"
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
						"Versions"
					],
					"operation": [
						"Putversion"
					]
				}
			}
		},
		{
			"displayName": "Content Type",
			"name": "Content-Type",
			"required": true,
			"description": "Type of the content being sent.",
			"default": "application/json",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Content-Type": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Versions"
					],
					"operation": [
						"Putversion"
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
						"Versions"
					],
					"operation": [
						"Putversion"
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
						"Versions"
					],
					"operation": [
						"Putversion"
					]
				}
			}
		},
		{
			"displayName": "Version Id",
			"name": "versionId",
			"required": true,
			"description": "ID of the version to update",
			"default": "{{versionId}}",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Versions"
					],
					"operation": [
						"Putversion"
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
						"Versions"
					],
					"operation": [
						"Putversion"
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
						"Versions"
					],
					"operation": [
						"Putversion"
					]
				}
			}
		},
];
