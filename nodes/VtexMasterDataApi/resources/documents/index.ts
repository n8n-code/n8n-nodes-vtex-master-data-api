import type { INodeProperties } from 'n8n-workflow';

export const documentsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Documents"
					]
				}
			},
			"options": [
				{
					"name": "Createorupdatepartialdocument",
					"value": "Createorupdatepartialdocument",
					"action": "Create partial document",
					"description": "This request allows you to partially update a document corresponding to a given data entity.\r\n\r\n> You can use this request to create documents for any given data entity. Because of this, you are not restricted to using the fields exemplified below in your requests. But you should be aware of the fields allowed or required for each document you wish to update.\r\n\r\n## Example use cases\r\n\r\n### Client profile\r\n\r\nIn order to create a customer profile's `phone` and `isNewsletterOptIn` fields, choose the `CL` data entity and send a request similar to this:\r\n\r\nPATCH\r\n```\r\nhttps://examplestore.vtexcommercestable.com.br/api/dataentities/Client/documents\r\n```\r\n\r\nRequest body\r\n```json\r\n{\r\n    \"phone\": \"+12025550195\",\r\n    \"isNewsletterOptIn\": false\r\n }\r\n```\r\n\r\n### Client address\r\n\r\nIn order to update the `receiverName` of an existing address, the data entity is `AD` and the request would look like this:\r\n\r\nPATCH\r\n```\r\nhttps://examplestore.vtexcommercestable.com.br/api/dataentities/Address/documents\r\n```\r\n\r\nRequest body\r\n```json\r\n{\r\n    \"receiverName\": \"Lois Lane\"\r\n}\r\n```",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/api/dataentities/{{$parameter[\"dataEntityName\"]}}/documents"
						}
					}
				},
				{
					"name": "Createnewdocument",
					"value": "Createnewdocument",
					"action": "Create new document",
					"description": "This request allows you to create a new document corresponding to a given data entity. For example, you can create a new customer profile or address.\r\n\r\n> You can use this request to create documents for any given data entity. Because of this, you are not restricted to using the fields exemplified below in your requests. But you should be aware of the fields allowed or required for each document you wish to create.\r\n\r\n## Example use cases\r\n\r\n### Client profile\r\n\r\nIn order to create a new customer profile, choose the `CL` data entity and send a request similar to this:\r\n\r\nPOST\r\n```\r\nhttps://examplestore.vtexcommercestable.com.br/api/dataentities/Client/documents\r\n```\r\n\r\nRequest body\r\n```json\r\n{\r\n    \"email\": \"clark.kent@examplemail.com\",\r\n    \"firstName\": \"Clark\",\r\n    \"lastName\": \"Kent\",\r\n    \"phone\": \"+12025550195\",\r\n    \"documentType\": \"CPF\",\r\n    \"document\": \"12345678900\"\r\n    \"isCorporate\": false,\r\n    \"isNewsletterOptIn\": false,\r\n    \"localeDefault\": \"en-US\"\r\n }\r\n```\r\n\r\n### Client address\r\n\r\nFor a new address, the data entity is `AD` and the request would look like this:\r\n\r\nPOST\r\n```\r\nhttps://examplestore.vtexcommercestable.com.br/api/dataentities/Address/documents\r\n```\r\n\r\nRequest body\r\n```json\r\n{\r\n    \"addressName\": \"My House\",\r\n    \"addressType\": \"residential\",\r\n    \"city\": \"Metropolis\",\r\n    \"complement\": \"\",\r\n    \"country\": \"USA\",\r\n    \"postalCode\": \"11375\",\r\n    \"receiverName\": \"Clark Kent\",\r\n    \"reference\": null,\r\n    \"state\": \"MP\",\r\n    \"street\": \"Baker Street\",\r\n    \"neighborhood\": \"Upper east side\",\r\n    \"number\": \"21\",\r\n    \"userId\": \"7e03m794-a33a-11e9-84rt6-0adfa64s5a8e\"\r\n}\r\n```",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/dataentities/{{$parameter[\"dataEntityName\"]}}/documents"
						}
					}
				},
				{
					"name": "Deletedocument",
					"value": "Deletedocument",
					"action": "Delete document",
					"description": "It allows to delete a document.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/dataentities/{{$parameter[\"dataEntityName\"]}}/documents/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Getdocument",
					"value": "Getdocument",
					"action": "Get document",
					"description": "Gets document by ID.\n\r\n\r> Assign the `_fields` parameter in the query string to retrieve the desired fields. If you want to return all the fields use `_fields=_all`.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/dataentities/{{$parameter[\"dataEntityName\"]}}/documents/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Updatepartialdocument",
					"value": "Updatepartialdocument",
					"action": "Update partial document",
					"description": "This request allows you to partially update a document corresponding to a given data entity. For example, you can update some fields of a customer profile or address.\r\n\r\n> You can use this request to update documents for any given data entity. Because of this, you are not restricted to using the fields exemplified below in your requests. But you should be aware of the fields allowed or required for each document you wish to update.\r\n\r\n## Example use cases\r\n\r\n### Client profile\r\n\r\nIn order to update a customer profile's `phone` and `isNewsletterOptIn` fields, choose the `CL` data entity and send a request similar to this:\r\n\r\nPATCH\r\n```\r\nhttps://examplestore.vtexcommercestable.com.br/api/dataentities/Client/documents/123456789abc\r\n```\r\n\r\nRequest body\r\n```json\r\n{\r\n    \"phone\": \"+12025550195\",\r\n    \"isNewsletterOptIn\": false\r\n }\r\n```\r\n\r\n### Client address\r\n\r\nIn order to update the `receiverName` of an existing address, the data entity is `AD` and the request would look like this:\r\n\r\nPATCH\r\n```\r\nhttps://examplestore.vtexcommercestable.com.br/api/dataentities/Address/documents/123456789abc\r\n```\r\n\r\nRequest body\r\n```json\r\n{\r\n    \"receiverName\": \"Lois Lane\"\r\n}\r\n```",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/api/dataentities/{{$parameter[\"dataEntityName\"]}}/documents/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Updateentiredocument",
					"value": "Updateentiredocument",
					"action": "Update entire document",
					"description": "Update an existing document corresponding to a given data entity. For example, you can update a customer profile or address.\r\n\r\n> You can use this request to update documents in any given data entity. Because of this, you are not restricted to using the fields exemplified below in your requests. But you should be aware of the fields allowed or required for each document you wish to update.\r\n\r\n## Example use cases\r\n\r\n### Client profile\r\n\r\nIn order to update an existing customer profile, choose the `CL` data entity and send a request similar to this:\r\n\r\nPUT\r\n```\r\nhttps://examplestore.vtexcommercestable.com.br/api/dataentities/Client/documents/123456789abc\r\n```\r\n\r\nRequest body\r\n```json\r\n{\r\n    \"email\": \"clark.kent@examplemail.com\",\r\n    \"firstName\": \"Clark\",\r\n    \"lastName\": \"Kent\",\r\n    \"phone\": \"+12025550195\",\r\n    \"documentType\": \"CPF\",\r\n    \"document\": \"12345678900\"\r\n    \"isCorporate\": false,\r\n    \"isNewsletterOptIn\": false,\r\n    \"localeDefault\": \"en-US\"\r\n }\r\n```\r\n\r\n### Client address\r\n\r\nTo update an address, the data entity is `AD` and the request would look like this:\r\n\r\nPUT\r\n```\r\nhttps://examplestore.vtexcommercestable.com.br/api/dataentities/Address/documents/123456789abc\r\n```\r\n\r\nRequest body\r\n```json\r\n{\r\n    \"addressName\": \"My House\",\r\n    \"addressType\": \"residential\",\r\n    \"city\": \"Metropolis\",\r\n    \"complement\": \"\",\r\n    \"country\": \"USA\",\r\n    \"postalCode\": \"11375\",\r\n    \"receiverName\": \"Clark Kent\",\r\n    \"reference\": null,\r\n    \"state\": \"MP\",\r\n    \"street\": \"Baker Street\",\r\n    \"neighborhood\": \"Upper east side\",\r\n    \"number\": \"21\",\r\n    \"userId\": \"7e03m794-a33a-11e9-84rt6-0adfa64s5a8e\"\r\n}\r\n```",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/dataentities/{{$parameter[\"dataEntityName\"]}}/documents/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "PATCH /api/dataentities/{dataEntityName}/documents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Documents"
					],
					"operation": [
						"Createorupdatepartialdocument"
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
						"Documents"
					],
					"operation": [
						"Createorupdatepartialdocument"
					]
				}
			}
		},
		{
			"displayName": "Schema",
			"name": "_schema",
			"description": "Name of the schema the document to be created needs to be compliant with.",
			"default": "schema",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "_schema",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Documents"
					],
					"operation": [
						"Createorupdatepartialdocument"
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
						"Documents"
					],
					"operation": [
						"Createorupdatepartialdocument"
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
						"Documents"
					],
					"operation": [
						"Createorupdatepartialdocument"
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
						"Documents"
					],
					"operation": [
						"Createorupdatepartialdocument"
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
						"Documents"
					],
					"operation": [
						"Createorupdatepartialdocument"
					]
				}
			}
		},
		{
			"displayName": "POST /api/dataentities/{dataEntityName}/documents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Documents"
					],
					"operation": [
						"Createnewdocument"
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
						"Documents"
					],
					"operation": [
						"Createnewdocument"
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
						"Documents"
					],
					"operation": [
						"Createnewdocument"
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
						"Documents"
					],
					"operation": [
						"Createnewdocument"
					]
				}
			}
		},
		{
			"displayName": "Schema",
			"name": "_schema",
			"description": "Name of the schema the document to be created needs to be compliant with.",
			"default": "schema",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "_schema",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Documents"
					],
					"operation": [
						"Createnewdocument"
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
						"Documents"
					],
					"operation": [
						"Createnewdocument"
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
						"Documents"
					],
					"operation": [
						"Createnewdocument"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/dataentities/{dataEntityName}/documents/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Documents"
					],
					"operation": [
						"Deletedocument"
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
						"Documents"
					],
					"operation": [
						"Deletedocument"
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
						"Documents"
					],
					"operation": [
						"Deletedocument"
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
						"Documents"
					],
					"operation": [
						"Deletedocument"
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
						"Documents"
					],
					"operation": [
						"Deletedocument"
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
						"Documents"
					],
					"operation": [
						"Deletedocument"
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
						"Documents"
					],
					"operation": [
						"Deletedocument"
					]
				}
			}
		},
		{
			"displayName": "GET /api/dataentities/{dataEntityName}/documents/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Documents"
					],
					"operation": [
						"Getdocument"
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
						"Documents"
					],
					"operation": [
						"Getdocument"
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
						"Documents"
					],
					"operation": [
						"Getdocument"
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
						"Documents"
					],
					"operation": [
						"Getdocument"
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
						"Documents"
					],
					"operation": [
						"Getdocument"
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
						"Documents"
					],
					"operation": [
						"Getdocument"
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
						"Documents"
					],
					"operation": [
						"Getdocument"
					]
				}
			}
		},
		{
			"displayName": "PATCH /api/dataentities/{dataEntityName}/documents/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Documents"
					],
					"operation": [
						"Updatepartialdocument"
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
						"Documents"
					],
					"operation": [
						"Updatepartialdocument"
					]
				}
			}
		},
		{
			"displayName": "Where",
			"name": "_where",
			"description": "Filter specification.",
			"default": "firstName is not null.",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "_where",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Documents"
					],
					"operation": [
						"Updatepartialdocument"
					]
				}
			}
		},
		{
			"displayName": "Schema",
			"name": "_schema",
			"description": "Name of the schema the document to be created needs to be compliant with.",
			"default": "schema",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "_schema",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Documents"
					],
					"operation": [
						"Updatepartialdocument"
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
						"Documents"
					],
					"operation": [
						"Updatepartialdocument"
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
						"Documents"
					],
					"operation": [
						"Updatepartialdocument"
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
						"Documents"
					],
					"operation": [
						"Updatepartialdocument"
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
						"Documents"
					],
					"operation": [
						"Updatepartialdocument"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/dataentities/{dataEntityName}/documents/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Documents"
					],
					"operation": [
						"Updateentiredocument"
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
						"Documents"
					],
					"operation": [
						"Updateentiredocument"
					]
				}
			}
		},
		{
			"displayName": "Where",
			"name": "_where",
			"description": "Filter specification.",
			"default": "firstName is not null.",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "_where",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Documents"
					],
					"operation": [
						"Updateentiredocument"
					]
				}
			}
		},
		{
			"displayName": "Schema",
			"name": "_schema",
			"description": "Name of the schema the document to be created needs to be compliant with.",
			"default": "schema",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "_schema",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Documents"
					],
					"operation": [
						"Updateentiredocument"
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
						"Documents"
					],
					"operation": [
						"Updateentiredocument"
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
						"Documents"
					],
					"operation": [
						"Updateentiredocument"
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
						"Documents"
					],
					"operation": [
						"Updateentiredocument"
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
						"Documents"
					],
					"operation": [
						"Updateentiredocument"
					]
				}
			}
		},
];
