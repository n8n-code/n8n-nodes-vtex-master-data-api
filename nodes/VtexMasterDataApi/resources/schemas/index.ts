import type { INodeProperties } from 'n8n-workflow';

export const schemasDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Schemas"
					]
				}
			},
			"options": [
				{
					"name": "Getschemas",
					"value": "Getschemas",
					"action": "Get schemas",
					"description": "Return the schemas saved.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/dataentities/{{$parameter[\"dataEntityName\"]}}/schemas"
						}
					}
				},
				{
					"name": "Deleteschemabyname",
					"value": "Deleteschemabyname",
					"action": "Delete schema by name",
					"description": "Deletes an existing schema for a given data entity.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/dataentities/{{$parameter[\"dataEntityName\"]}}/schemas/{{$parameter[\"schemaName\"]}}"
						}
					}
				},
				{
					"name": "Getschemabyname",
					"value": "Getschemabyname",
					"action": "Get schema by name",
					"description": "Returns an existing schema for a given data entity.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/dataentities/{{$parameter[\"dataEntityName\"]}}/schemas/{{$parameter[\"schemaName\"]}}"
						}
					}
				},
				{
					"name": "Saveschemabyname",
					"value": "Saveschemabyname",
					"action": "Save schema by name",
					"description": "Creates or edits a data entity schema. Learn more about [Master Data schemas](https://developers.vtex.com/vtex-rest-api/docs/master-data-schema-lifecycle)\r\n\r\n> Note that if you send a `schemaName` that does not exist for that data entity, this request will create it.\r\n\r\nThis request can also be used to [create or edit Master Data v2 triggers](https://developers.vtex.com/vtex-rest-api/docs/setting-up-triggers-in-master-data-v2).",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/dataentities/{{$parameter[\"dataEntityName\"]}}/schemas/{{$parameter[\"schemaName\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/dataentities/{dataEntityName}/schemas",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Schemas"
					],
					"operation": [
						"Getschemas"
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
						"Schemas"
					],
					"operation": [
						"Getschemas"
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
						"Schemas"
					],
					"operation": [
						"Getschemas"
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
						"Schemas"
					],
					"operation": [
						"Getschemas"
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
						"Schemas"
					],
					"operation": [
						"Getschemas"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/dataentities/{dataEntityName}/schemas/{schemaName}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Schemas"
					],
					"operation": [
						"Deleteschemabyname"
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
						"Schemas"
					],
					"operation": [
						"Deleteschemabyname"
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
						"Schemas"
					],
					"operation": [
						"Deleteschemabyname"
					]
				}
			}
		},
		{
			"displayName": "Schema Name",
			"name": "schemaName",
			"required": true,
			"description": "Name of the schema.",
			"default": "{{schema}}",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Schemas"
					],
					"operation": [
						"Deleteschemabyname"
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
						"Schemas"
					],
					"operation": [
						"Deleteschemabyname"
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
						"Schemas"
					],
					"operation": [
						"Deleteschemabyname"
					]
				}
			}
		},
		{
			"displayName": "GET /api/dataentities/{dataEntityName}/schemas/{schemaName}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Schemas"
					],
					"operation": [
						"Getschemabyname"
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
						"Schemas"
					],
					"operation": [
						"Getschemabyname"
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
						"Schemas"
					],
					"operation": [
						"Getschemabyname"
					]
				}
			}
		},
		{
			"displayName": "Schema Name",
			"name": "schemaName",
			"required": true,
			"description": "Name of the schema.",
			"default": "{{schema}}",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Schemas"
					],
					"operation": [
						"Getschemabyname"
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
						"Schemas"
					],
					"operation": [
						"Getschemabyname"
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
						"Schemas"
					],
					"operation": [
						"Getschemabyname"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/dataentities/{dataEntityName}/schemas/{schemaName}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Schemas"
					],
					"operation": [
						"Saveschemabyname"
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
						"Schemas"
					],
					"operation": [
						"Saveschemabyname"
					]
				}
			}
		},
		{
			"displayName": "Schema Name",
			"name": "schemaName",
			"required": true,
			"description": "Name of the schema.",
			"default": "{{schema}}",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Schemas"
					],
					"operation": [
						"Saveschemabyname"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Properties",
			"name": "properties",
			"type": "json",
			"default": "{\n  \"name\": {\n    \"type\": \"string\"\n  }\n}",
			"routing": {
				"send": {
					"property": "properties",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Schemas"
					],
					"operation": [
						"Saveschemabyname"
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
						"Schemas"
					],
					"operation": [
						"Saveschemabyname"
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
						"Schemas"
					],
					"operation": [
						"Saveschemabyname"
					]
				}
			}
		},
];
