import type { INodeProperties } from 'n8n-workflow';

export const addressesDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Addresses"
					]
				}
			},
			"options": [
				{
					"name": "Create New Customer Address",
					"value": "Create New Customer Address",
					"action": "Create new customer address",
					"description": "Creates new customer address. \r\n\r\n> You can use this request to create customer addresses according to any `AD` schema. Because of this, you are not restricted to using the fields exemplified below in your requests. But you should be aware of the fields allowed or required for the schemas you are using. Learn more about how to use [Master Data v2 schemas](https://developers.vtex.com/vtex-rest-api/docs/master-data-schema-lifecycle).",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/dataentities/Address/documents"
						}
					}
				},
				{
					"name": "Delete Customer Address",
					"value": "Delete Customer Address",
					"action": "Delete customer address",
					"description": "Deletes a customer address.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/dataentities/Address/documents/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Update Customer Address",
					"value": "Update Customer Address",
					"action": "Update customer address",
					"description": "Partially updates a customer address.\r\n\r\n> You can use this request to update customer addresses according to any `AD` schema. Because of this, you are not restricted to using the fields exemplified below in your requests. But you should be aware of the fields allowed or required for the schemas you are using. Learn more about how to use [Master Data v2 schemas](https://developers.vtex.com/vtex-rest-api/docs/master-data-schema-lifecycle).",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/api/dataentities/Address/documents/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /api/dataentities/Address/documents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Addresses"
					],
					"operation": [
						"Create New Customer Address"
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
						"Addresses"
					],
					"operation": [
						"Create New Customer Address"
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
						"Addresses"
					],
					"operation": [
						"Create New Customer Address"
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
						"Addresses"
					],
					"operation": [
						"Create New Customer Address"
					]
				}
			}
		},
		{
			"displayName": "Address Name",
			"name": "addressName",
			"type": "string",
			"default": "My house",
			"description": "Address name.",
			"routing": {
				"send": {
					"property": "addressName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Addresses"
					],
					"operation": [
						"Create New Customer Address"
					]
				}
			}
		},
		{
			"displayName": "Address Type",
			"name": "addressType",
			"type": "string",
			"default": "residential",
			"description": "Type of address. For example, `Residential` or `Pickup`, among others.",
			"routing": {
				"send": {
					"property": "addressType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Addresses"
					],
					"operation": [
						"Create New Customer Address"
					]
				}
			}
		},
		{
			"displayName": "City",
			"name": "city",
			"type": "string",
			"default": "Rio de Janeiro",
			"description": "City of the shipping address.",
			"routing": {
				"send": {
					"property": "city",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Addresses"
					],
					"operation": [
						"Create New Customer Address"
					]
				}
			}
		},
		{
			"displayName": "Complement",
			"name": "complement",
			"type": "string",
			"default": "3rd floor",
			"description": "Complement to the shipping address in case it applies.",
			"routing": {
				"send": {
					"property": "complement",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Addresses"
					],
					"operation": [
						"Create New Customer Address"
					]
				}
			}
		},
		{
			"displayName": "Country",
			"name": "country",
			"type": "string",
			"default": "BRA",
			"description": "Three letter ISO code of the country of the shipping address.",
			"routing": {
				"send": {
					"property": "country",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Addresses"
					],
					"operation": [
						"Create New Customer Address"
					]
				}
			}
		},
		{
			"displayName": "Neighborhood",
			"name": "neighborhood",
			"type": "string",
			"default": "Botafogo",
			"description": "Neighborhood of the address.",
			"routing": {
				"send": {
					"property": "neighborhood",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Addresses"
					],
					"operation": [
						"Create New Customer Address"
					]
				}
			}
		},
		{
			"displayName": "Number",
			"name": "number",
			"type": "string",
			"default": "300",
			"description": "Number of the building, house or apartment in the shipping address.",
			"routing": {
				"send": {
					"property": "number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Addresses"
					],
					"operation": [
						"Create New Customer Address"
					]
				}
			}
		},
		{
			"displayName": "Postal Code",
			"name": "postalCode",
			"type": "string",
			"default": "12345-000",
			"description": "Postal Code.",
			"routing": {
				"send": {
					"property": "postalCode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Addresses"
					],
					"operation": [
						"Create New Customer Address"
					]
				}
			}
		},
		{
			"displayName": "Receiver Name",
			"name": "receiverName",
			"type": "string",
			"default": "Clark Kent.",
			"description": "Name of the person who is going to receive the order.",
			"routing": {
				"send": {
					"property": "receiverName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Addresses"
					],
					"operation": [
						"Create New Customer Address"
					]
				}
			}
		},
		{
			"displayName": "Reference",
			"name": "reference",
			"type": "string",
			"default": "Grey building",
			"description": "Complement that might help locate the shipping address more precisely in case of delivery.",
			"routing": {
				"send": {
					"property": "reference",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Addresses"
					],
					"operation": [
						"Create New Customer Address"
					]
				}
			}
		},
		{
			"displayName": "State",
			"name": "state",
			"type": "string",
			"default": "Rio de Janeiro",
			"description": "State of the shipping address.",
			"routing": {
				"send": {
					"property": "state",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Addresses"
					],
					"operation": [
						"Create New Customer Address"
					]
				}
			}
		},
		{
			"displayName": "Street",
			"name": "street",
			"type": "string",
			"default": "Praia de Botafogo",
			"description": "Street of the address.",
			"routing": {
				"send": {
					"property": "street",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Addresses"
					],
					"operation": [
						"Create New Customer Address"
					]
				}
			}
		},
		{
			"displayName": "User Id",
			"name": "userId",
			"type": "string",
			"default": "7e03m794-a33a-11e9-84rt6-0adfa64s5a8e",
			"description": "ID of the customer to whom the address belongs.",
			"routing": {
				"send": {
					"property": "userId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Addresses"
					],
					"operation": [
						"Create New Customer Address"
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
						"Addresses"
					],
					"operation": [
						"Create New Customer Address"
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
						"Addresses"
					],
					"operation": [
						"Create New Customer Address"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/dataentities/Address/documents/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Addresses"
					],
					"operation": [
						"Delete Customer Address"
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
						"Addresses"
					],
					"operation": [
						"Delete Customer Address"
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
						"Addresses"
					],
					"operation": [
						"Delete Customer Address"
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
						"Addresses"
					],
					"operation": [
						"Delete Customer Address"
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
						"Addresses"
					],
					"operation": [
						"Delete Customer Address"
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
						"Addresses"
					],
					"operation": [
						"Delete Customer Address"
					]
				}
			}
		},
		{
			"displayName": "PATCH /api/dataentities/Address/documents/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Addresses"
					],
					"operation": [
						"Update Customer Address"
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
						"Addresses"
					],
					"operation": [
						"Update Customer Address"
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
						"Addresses"
					],
					"operation": [
						"Update Customer Address"
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
						"Addresses"
					],
					"operation": [
						"Update Customer Address"
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
						"Addresses"
					],
					"operation": [
						"Update Customer Address"
					]
				}
			}
		},
		{
			"displayName": "Address Name",
			"name": "addressName",
			"type": "string",
			"default": "My house",
			"description": "Address name.",
			"routing": {
				"send": {
					"property": "addressName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Addresses"
					],
					"operation": [
						"Update Customer Address"
					]
				}
			}
		},
		{
			"displayName": "Address Type",
			"name": "addressType",
			"type": "string",
			"default": "residential",
			"description": "Type of address. For example, `Residential` or `Pickup`, among others.",
			"routing": {
				"send": {
					"property": "addressType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Addresses"
					],
					"operation": [
						"Update Customer Address"
					]
				}
			}
		},
		{
			"displayName": "City",
			"name": "city",
			"type": "string",
			"default": "Rio de Janeiro",
			"description": "City of the shipping address.",
			"routing": {
				"send": {
					"property": "city",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Addresses"
					],
					"operation": [
						"Update Customer Address"
					]
				}
			}
		},
		{
			"displayName": "Complement",
			"name": "complement",
			"type": "string",
			"default": "3rd floor",
			"description": "Complement to the shipping address in case it applies.",
			"routing": {
				"send": {
					"property": "complement",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Addresses"
					],
					"operation": [
						"Update Customer Address"
					]
				}
			}
		},
		{
			"displayName": "Country",
			"name": "country",
			"type": "string",
			"default": "BRA",
			"description": "Three letter ISO code of the country of the shipping address.",
			"routing": {
				"send": {
					"property": "country",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Addresses"
					],
					"operation": [
						"Update Customer Address"
					]
				}
			}
		},
		{
			"displayName": "Neighborhood",
			"name": "neighborhood",
			"type": "string",
			"default": "Botafogo",
			"description": "Neighborhood of the address.",
			"routing": {
				"send": {
					"property": "neighborhood",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Addresses"
					],
					"operation": [
						"Update Customer Address"
					]
				}
			}
		},
		{
			"displayName": "Number",
			"name": "number",
			"type": "string",
			"default": "300",
			"description": "Number of the building, house or apartment in the shipping address.",
			"routing": {
				"send": {
					"property": "number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Addresses"
					],
					"operation": [
						"Update Customer Address"
					]
				}
			}
		},
		{
			"displayName": "Postal Code",
			"name": "postalCode",
			"type": "string",
			"default": "12345-000",
			"description": "Postal Code.",
			"routing": {
				"send": {
					"property": "postalCode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Addresses"
					],
					"operation": [
						"Update Customer Address"
					]
				}
			}
		},
		{
			"displayName": "Receiver Name",
			"name": "receiverName",
			"type": "string",
			"default": "Clark Kent.",
			"description": "Name of the person who is going to receive the order.",
			"routing": {
				"send": {
					"property": "receiverName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Addresses"
					],
					"operation": [
						"Update Customer Address"
					]
				}
			}
		},
		{
			"displayName": "Reference",
			"name": "reference",
			"type": "string",
			"default": "Grey building",
			"description": "Complement that might help locate the shipping address more precisely in case of delivery.",
			"routing": {
				"send": {
					"property": "reference",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Addresses"
					],
					"operation": [
						"Update Customer Address"
					]
				}
			}
		},
		{
			"displayName": "State",
			"name": "state",
			"type": "string",
			"default": "Rio de Janeiro",
			"description": "State of the shipping address.",
			"routing": {
				"send": {
					"property": "state",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Addresses"
					],
					"operation": [
						"Update Customer Address"
					]
				}
			}
		},
		{
			"displayName": "Street",
			"name": "street",
			"type": "string",
			"default": "Praia de Botafogo",
			"description": "Street of the address.",
			"routing": {
				"send": {
					"property": "street",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Addresses"
					],
					"operation": [
						"Update Customer Address"
					]
				}
			}
		},
		{
			"displayName": "User Id",
			"name": "userId",
			"type": "string",
			"default": "7e03m794-a33a-11e9-84rt6-0adfa64s5a8e",
			"description": "ID of the customer to whom the address belongs.",
			"routing": {
				"send": {
					"property": "userId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Addresses"
					],
					"operation": [
						"Update Customer Address"
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
						"Addresses"
					],
					"operation": [
						"Update Customer Address"
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
						"Addresses"
					],
					"operation": [
						"Update Customer Address"
					]
				}
			}
		},
];
