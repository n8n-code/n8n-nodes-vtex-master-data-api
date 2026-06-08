import type { INodeProperties } from 'n8n-workflow';

export const searchDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Search"
					]
				}
			},
			"options": [
				{
					"name": "Searchdocuments",
					"value": "Searchdocuments",
					"action": "Search documents",
					"description": "Retrieves documents' information, while choosing which fields will be returned and filtering documents by specific fields.\r\n\r\n> The response header `REST-Content-Range` indicates the total amount of results for that specific search. For example, it may return `resources 0-100/136108`, which indicates it has returned results from 0 to 100 of a total 136108.\r\n\r\nBelow you can see some query examples and learn more about each query parameter.\n\r\n\r> Avoid sending too many requests with wildcards (`*`) in the search parameters or that use the `keyword` parameter. This may lead to this endpoint being temporarily blocked for your account. If this happens you will receive an error with status code `503`.\r\n\r\n## Query examples\r\n\r\n### Simple filter\r\n\r\n```\r\n/dataentities/Client/search?email=my@email.com\r\n```\r\n\r\n### Complex filter\r\n\r\n```\r\n/dataentities/Client/search?_where=(firstName=Jon OR lastName=Smith) OR (createdIn between 2001-01-01 AND 2016-01-01)\r\n```\r\n\r\n### Date Range\r\n\r\n```\r\n/dataentities/Client/search?_where=createdIn between 2001-01-01 AND 2016-01-01\r\n```\r\n\r\n### Range numeric fields\r\n\r\n```\r\n/dataentities/Client/search?_where=age between 18 AND 25\r\n```\r\n\r\n### Partial filter\r\n\r\n```\r\n/dataentities/Client/search?firstName=*Maria*\r\n```\r\n\r\n### Filter for null values\r\n\r\n```\r\n/dataentities/Client/search?_where=firstName is null\r\n```\r\n\r\n### Filter for non-null values\r\n\r\n```\r\n/dataentities/Client/search?_where=firstName is not null\r\n```\r\n\r\n### Filter for difference\r\n```\r\n/dataentities/Client/search?_where=firstName<>maria\r\n```\r\n\r\n### Filter greater than or less than\r\n```\r\n/dataentities/Client/search?_where=number>5\r\n/dataentities/Client/search?_where=date<2001-01-01\r\n```",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/dataentities/{{$parameter[\"dataEntityName\"]}}/search"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/dataentities/{dataEntityName}/search",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Search"
					],
					"operation": [
						"Searchdocuments"
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
						"Search"
					],
					"operation": [
						"Searchdocuments"
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
						"Search"
					],
					"operation": [
						"Searchdocuments"
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
						"Search"
					],
					"operation": [
						"Searchdocuments"
					]
				}
			}
		},
		{
			"displayName": "REST Range",
			"name": "REST-Range",
			"required": true,
			"description": "Defines the collection of documents to be returned. A range within the collection limited by 100 documents per query.",
			"default": "resources=0-10",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"REST-Range": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Search"
					],
					"operation": [
						"Searchdocuments"
					]
				}
			}
		},
		{
			"displayName": "Fields",
			"name": "_fields",
			"description": "Fields that should be returned by document. Separate fields' names with commas. For example `_fields=email,firstName,document`. You can also use `_all` to fetch all fields.",
			"default": "email,firstName,document",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "_fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Search"
					],
					"operation": [
						"Searchdocuments"
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
						"Search"
					],
					"operation": [
						"Searchdocuments"
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
						"Search"
					],
					"operation": [
						"Searchdocuments"
					]
				}
			}
		},
		{
			"displayName": "Keyword",
			"name": "_keyword",
			"description": "String to search. Use quotes for a partial query. For example, `_keyword=Maria` or `_keyword=\"Maria\"`.",
			"default": "String to search",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "_keyword",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Search"
					],
					"operation": [
						"Searchdocuments"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "_sort",
			"description": "Sets sorting mode in two parts. The first part is the name of the field you want to sort by. In the second part, use `ASC` for ascending or `DESC` for descending.",
			"default": "firstName ASC",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "_sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Search"
					],
					"operation": [
						"Searchdocuments"
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
						"Search"
					],
					"operation": [
						"Searchdocuments"
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
						"Search"
					],
					"operation": [
						"Searchdocuments"
					]
				}
			}
		},
];
