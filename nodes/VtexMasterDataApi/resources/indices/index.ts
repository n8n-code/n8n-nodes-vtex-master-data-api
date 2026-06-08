import type { INodeProperties } from 'n8n-workflow';

export const indicesDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Indices"
					]
				}
			},
			"options": [
				{
					"name": "Getindices",
					"value": "Getindices",
					"action": "Get indices",
					"description": "Returns the list of indices by data entity.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/dataentities/{{$parameter[\"dataEntityName\"]}}/indices"
						}
					}
				},
				{
					"name": "Putindices",
					"value": "Putindices",
					"action": "Put indices",
					"description": "Create an index.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/dataentities/{{$parameter[\"dataEntityName\"]}}/indices"
						}
					}
				},
				{
					"name": "Deleteindexbyname",
					"value": "Deleteindexbyname",
					"action": "Delete index by name",
					"description": "Delete an index.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/dataentities/{{$parameter[\"dataEntityName\"]}}/indices/{{$parameter[\"index_name\"]}}"
						}
					}
				},
				{
					"name": "Getindexbyname",
					"value": "Getindexbyname",
					"action": "Get index by name",
					"description": "Returns an index.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/dataentities/{{$parameter[\"dataEntityName\"]}}/indices/{{$parameter[\"index_name\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/dataentities/{dataEntityName}/indices",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Indices"
					],
					"operation": [
						"Getindices"
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
						"Indices"
					],
					"operation": [
						"Getindices"
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
						"Indices"
					],
					"operation": [
						"Getindices"
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
						"Indices"
					],
					"operation": [
						"Getindices"
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
						"Indices"
					],
					"operation": [
						"Getindices"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/dataentities/{dataEntityName}/indices",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Indices"
					],
					"operation": [
						"Putindices"
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
						"Indices"
					],
					"operation": [
						"Putindices"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Fields",
			"name": "fields",
			"type": "string",
			"default": "",
			"description": "Comma-separted fields of the index",
			"routing": {
				"send": {
					"property": "fields",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Indices"
					],
					"operation": [
						"Putindices"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Multiple",
			"name": "multiple",
			"type": "boolean",
			"default": true,
			"description": "Determines whether the values need to be unique. If false, values must be unique.",
			"routing": {
				"send": {
					"property": "multiple",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Indices"
					],
					"operation": [
						"Putindices"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "Name to identify the index",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Indices"
					],
					"operation": [
						"Putindices"
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
						"Indices"
					],
					"operation": [
						"Putindices"
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
						"Indices"
					],
					"operation": [
						"Putindices"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/dataentities/{dataEntityName}/indices/{index_name}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Indices"
					],
					"operation": [
						"Deleteindexbyname"
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
						"Indices"
					],
					"operation": [
						"Deleteindexbyname"
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
						"Indices"
					],
					"operation": [
						"Deleteindexbyname"
					]
				}
			}
		},
		{
			"displayName": "Index Name",
			"name": "index_name",
			"required": true,
			"description": "Name of the index.",
			"default": "{{index_name}}",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Indices"
					],
					"operation": [
						"Deleteindexbyname"
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
						"Indices"
					],
					"operation": [
						"Deleteindexbyname"
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
						"Indices"
					],
					"operation": [
						"Deleteindexbyname"
					]
				}
			}
		},
		{
			"displayName": "GET /api/dataentities/{dataEntityName}/indices/{index_name}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Indices"
					],
					"operation": [
						"Getindexbyname"
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
						"Indices"
					],
					"operation": [
						"Getindexbyname"
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
						"Indices"
					],
					"operation": [
						"Getindexbyname"
					]
				}
			}
		},
		{
			"displayName": "Index Name",
			"name": "index_name",
			"required": true,
			"description": "Name of the index.",
			"default": "{{index_name}}",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Indices"
					],
					"operation": [
						"Getindexbyname"
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
						"Indices"
					],
					"operation": [
						"Getindexbyname"
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
						"Indices"
					],
					"operation": [
						"Getindexbyname"
					]
				}
			}
		},
];
