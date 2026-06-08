import type { INodeProperties } from 'n8n-workflow';

export const scrollDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Scroll"
					]
				}
			},
			"options": [
				{
					"name": "Scrolldocuments",
					"value": "Scrolldocuments",
					"action": "Scroll documents",
					"description": "In the first request, the `X-VTEX-MD-TOKEN` token will be returned in the header. This token must be passed to the next request in the query string `_token` parameter. The token has a timeout of 10 minutes, which refreshes after each request.\r\n\r\nAfter the token is obtained it is no longer necessary to send the filter or document size per page parameters. You only need to resend the token until the document collection is empty.\n\r\n\r> Avoid sending too many requests with wildcards (`*`) in the search parameters or that use the `keyword` parameter. This may lead to this endpoint being temporarily blocked for your account. If this happens you will receive an error with status code `429`.\r\n\r\n## Request examples\r\n\r\nFirst request:\r\n```\r\n/dataentities/Client/scroll?isCluster=true&_size=250&_fields=email,firstName\r\n```\r\n\r\nRetrieve the token in the header `X-VTEX-MD-TOKEN` from the first request's response and use it to make the next requests.\r\n\r\nSubsequent requests:\r\n```\r\n/dataentities/Client/scroll?_token={tokenValueExample}\r\n```",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/dataentities/{{$parameter[\"dataEntityName\"]}}/scroll"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/dataentities/{dataEntityName}/scroll",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Scroll"
					],
					"operation": [
						"Scrolldocuments"
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
						"Scroll"
					],
					"operation": [
						"Scrolldocuments"
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
						"Scroll"
					],
					"operation": [
						"Scrolldocuments"
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
						"Scroll"
					],
					"operation": [
						"Scrolldocuments"
					]
				}
			}
		},
		{
			"displayName": "Token",
			"name": "_token",
			"description": "Value of the header `X-VTEX-MD-TOKEN` returned in your first request. Send its value in this query string in the subsequent requests. The token has a timeout of 10 minutes, which refreshes after each new request.",
			"default": "{tokenValueExample}",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "_token",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Scroll"
					],
					"operation": [
						"Scrolldocuments"
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
						"Scroll"
					],
					"operation": [
						"Scrolldocuments"
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
						"Scroll"
					],
					"operation": [
						"Scrolldocuments"
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
						"Scroll"
					],
					"operation": [
						"Scrolldocuments"
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
						"Scroll"
					],
					"operation": [
						"Scrolldocuments"
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
						"Scroll"
					],
					"operation": [
						"Scrolldocuments"
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
						"Scroll"
					],
					"operation": [
						"Scrolldocuments"
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
						"Scroll"
					],
					"operation": [
						"Scrolldocuments"
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
						"Scroll"
					],
					"operation": [
						"Scrolldocuments"
					]
				}
			}
		},
];
