import type { INodeProperties } from 'n8n-workflow';

export const customerProfilesDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Customer Profiles"
					]
				}
			},
			"options": [
				{
					"name": "Create New Customer Profilev 2",
					"value": "Create New Customer Profilev 2",
					"action": "Create new customer profile",
					"description": "Creates new customer profile.\r\n\r\n> You can use this request to create customer profiles according to any `CL` schema. Because of this, you are not restricted to using the fields exemplified below in your requests. But you should be aware of the fields allowed or required for the schemas you are using. Learn more about how to use [Master Data v2 schemas](https://developers.vtex.com/vtex-rest-api/docs/master-data-schema-lifecycle).",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/dataentities/Client/documents"
						}
					}
				},
				{
					"name": "Delete Customer Profile",
					"value": "Delete Customer Profile",
					"action": "Delete customer profile",
					"description": "Deletes a customer profile.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/dataentities/Client/documents/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Update Customer Profile",
					"value": "Update Customer Profile",
					"action": "Update customer profile",
					"description": "Partially updates a customer profile.\r\n\r\n> You can use this request to update customer profiles according to any `CL` schema. Because of this, you are not restricted to using the fields exemplified below in your requests. But you should be aware of the fields allowed or required for the schemas you are using. Learn more about how to use [Master Data v2 schemas](https://developers.vtex.com/vtex-rest-api/docs/master-data-schema-lifecycle).",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/api/dataentities/Client/documents/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /api/dataentities/Client/documents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Customer Profiles"
					],
					"operation": [
						"Create New Customer Profilev 2"
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
						"Customer Profiles"
					],
					"operation": [
						"Create New Customer Profilev 2"
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
						"Customer Profiles"
					],
					"operation": [
						"Create New Customer Profilev 2"
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
						"Customer Profiles"
					],
					"operation": [
						"Create New Customer Profilev 2"
					]
				}
			}
		},
		{
			"displayName": "Document",
			"name": "document",
			"type": "string",
			"default": "12345678900",
			"description": "Client document.",
			"routing": {
				"send": {
					"property": "document",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Customer Profiles"
					],
					"operation": [
						"Create New Customer Profilev 2"
					]
				}
			}
		},
		{
			"displayName": "Document Type",
			"name": "documentType",
			"type": "string",
			"default": "CPF",
			"description": "Client document type.",
			"routing": {
				"send": {
					"property": "documentType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Customer Profiles"
					],
					"operation": [
						"Create New Customer Profilev 2"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "email",
			"type": "string",
			"default": "clark.kent@examplemail.com",
			"description": "Client email address.",
			"routing": {
				"send": {
					"property": "email",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Customer Profiles"
					],
					"operation": [
						"Create New Customer Profilev 2"
					]
				}
			}
		},
		{
			"displayName": "First Name",
			"name": "firstName",
			"type": "string",
			"default": "Clark",
			"description": "Client first name.",
			"routing": {
				"send": {
					"property": "firstName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Customer Profiles"
					],
					"operation": [
						"Create New Customer Profilev 2"
					]
				}
			}
		},
		{
			"displayName": "Is Corporate",
			"name": "isCorporate",
			"type": "boolean",
			"default": false,
			"description": "Indicates whether client is corporate.",
			"routing": {
				"send": {
					"property": "isCorporate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Customer Profiles"
					],
					"operation": [
						"Create New Customer Profilev 2"
					]
				}
			}
		},
		{
			"displayName": "Is Newsletter Opt In",
			"name": "isNewsletterOptIn",
			"type": "boolean",
			"default": false,
			"description": "Indicates whether client otped to receive the store newsletter.",
			"routing": {
				"send": {
					"property": "isNewsletterOptIn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Customer Profiles"
					],
					"operation": [
						"Create New Customer Profilev 2"
					]
				}
			}
		},
		{
			"displayName": "Last Name",
			"name": "lastName",
			"type": "string",
			"default": "Kent",
			"description": "Client last name.",
			"routing": {
				"send": {
					"property": "lastName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Customer Profiles"
					],
					"operation": [
						"Create New Customer Profilev 2"
					]
				}
			}
		},
		{
			"displayName": "Locale Default",
			"name": "localeDefault",
			"type": "string",
			"default": "en-US",
			"description": "Default locale, used to set store language and currency, for example.",
			"routing": {
				"send": {
					"property": "localeDefault",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Customer Profiles"
					],
					"operation": [
						"Create New Customer Profilev 2"
					]
				}
			}
		},
		{
			"displayName": "Phone",
			"name": "phone",
			"type": "string",
			"default": "+12025550195",
			"description": "Client telephone number.",
			"routing": {
				"send": {
					"property": "phone",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Customer Profiles"
					],
					"operation": [
						"Create New Customer Profilev 2"
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
						"Customer Profiles"
					],
					"operation": [
						"Create New Customer Profilev 2"
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
						"Customer Profiles"
					],
					"operation": [
						"Create New Customer Profilev 2"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/dataentities/Client/documents/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Customer Profiles"
					],
					"operation": [
						"Delete Customer Profile"
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
						"Customer Profiles"
					],
					"operation": [
						"Delete Customer Profile"
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
						"Customer Profiles"
					],
					"operation": [
						"Delete Customer Profile"
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
						"Customer Profiles"
					],
					"operation": [
						"Delete Customer Profile"
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
						"Customer Profiles"
					],
					"operation": [
						"Delete Customer Profile"
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
						"Customer Profiles"
					],
					"operation": [
						"Delete Customer Profile"
					]
				}
			}
		},
		{
			"displayName": "PATCH /api/dataentities/Client/documents/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Customer Profiles"
					],
					"operation": [
						"Update Customer Profile"
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
						"Customer Profiles"
					],
					"operation": [
						"Update Customer Profile"
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
						"Customer Profiles"
					],
					"operation": [
						"Update Customer Profile"
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
						"Customer Profiles"
					],
					"operation": [
						"Update Customer Profile"
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
						"Customer Profiles"
					],
					"operation": [
						"Update Customer Profile"
					]
				}
			}
		},
		{
			"displayName": "Document",
			"name": "document",
			"type": "string",
			"default": "12345678900",
			"description": "Client document.",
			"routing": {
				"send": {
					"property": "document",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Customer Profiles"
					],
					"operation": [
						"Update Customer Profile"
					]
				}
			}
		},
		{
			"displayName": "Document Type",
			"name": "documentType",
			"type": "string",
			"default": "CPF",
			"description": "Client document type.",
			"routing": {
				"send": {
					"property": "documentType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Customer Profiles"
					],
					"operation": [
						"Update Customer Profile"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "email",
			"type": "string",
			"default": "clark.kent@examplemail.com",
			"description": "Client email address.",
			"routing": {
				"send": {
					"property": "email",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Customer Profiles"
					],
					"operation": [
						"Update Customer Profile"
					]
				}
			}
		},
		{
			"displayName": "First Name",
			"name": "firstName",
			"type": "string",
			"default": "Clark",
			"description": "Client first name.",
			"routing": {
				"send": {
					"property": "firstName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Customer Profiles"
					],
					"operation": [
						"Update Customer Profile"
					]
				}
			}
		},
		{
			"displayName": "Is Corporate",
			"name": "isCorporate",
			"type": "boolean",
			"default": false,
			"description": "Indicates whether client is corporate.",
			"routing": {
				"send": {
					"property": "isCorporate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Customer Profiles"
					],
					"operation": [
						"Update Customer Profile"
					]
				}
			}
		},
		{
			"displayName": "Is Newsletter Opt In",
			"name": "isNewsletterOptIn",
			"type": "boolean",
			"default": false,
			"description": "Indicates whether client otped to receive the store newsletter.",
			"routing": {
				"send": {
					"property": "isNewsletterOptIn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Customer Profiles"
					],
					"operation": [
						"Update Customer Profile"
					]
				}
			}
		},
		{
			"displayName": "Last Name",
			"name": "lastName",
			"type": "string",
			"default": "Kent",
			"description": "Client last name.",
			"routing": {
				"send": {
					"property": "lastName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Customer Profiles"
					],
					"operation": [
						"Update Customer Profile"
					]
				}
			}
		},
		{
			"displayName": "Locale Default",
			"name": "localeDefault",
			"type": "string",
			"default": "en-US",
			"description": "Default locale, used to set store language and currency, for example.",
			"routing": {
				"send": {
					"property": "localeDefault",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Customer Profiles"
					],
					"operation": [
						"Update Customer Profile"
					]
				}
			}
		},
		{
			"displayName": "Phone",
			"name": "phone",
			"type": "string",
			"default": "+12025550195",
			"description": "Client telephone number.",
			"routing": {
				"send": {
					"property": "phone",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Customer Profiles"
					],
					"operation": [
						"Update Customer Profile"
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
						"Customer Profiles"
					],
					"operation": [
						"Update Customer Profile"
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
						"Customer Profiles"
					],
					"operation": [
						"Update Customer Profile"
					]
				}
			}
		},
];
