import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { documentsDescription } from './resources/documents';
import { searchDescription } from './resources/search';
import { scrollDescription } from './resources/scroll';
import { schemasDescription } from './resources/schemas';
import { indicesDescription } from './resources/indices';
import { clustersDescription } from './resources/clusters';
import { versionsDescription } from './resources/versions';
import { customerProfilesDescription } from './resources/customer-profiles';
import { addressesDescription } from './resources/addresses';

export class VtexMasterDataApi implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'vtex-master-data-api',
		name: 'N8nDevVtexMasterDataApi',
		icon: { light: 'file:./vtex-master-data-api.svg', dark: 'file:./vtex-master-data-api.dark.svg' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'ATTENTION: This version isn\'t compliant with data entities of old version (e.g. CL and AD). It\'s possible to use this configuration only to new data entities',
		defaults: { name: 'vtex-master-data-api' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevVtexMasterDataApiApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Documents",
					"value": "Documents",
					"description": "The APIs within this group are used to save documents and query them by id.\r\n\r\nIf the document has the id attribute or has fields that have been set to indexes with unique values, VTEX Master Data will attempt to identify the document. If the document is found a change will be made. If it is not found, an inclusion will be made. ** This scenario does not apply to the API with the POST verb**.\r\n\r\nOtherwise, a new document will always be created.\r\n\r\nYou can use the query string `_where` to apply an update only if the document is compliant with the clause.\r\n\r\nIn addition with this feature you can use the schema parameter `_schema` as a query string to apply the update only if the document is compliant with the schema. If the document is not compliant, the body of the response will have an array with each error, where the field ```Message``` indicates the type of the error.\r\n\r\n### Response status code\r\n\r\n1. Status Code 201: Document created successfully\r\n2. Status Code 200: Document changed successfully\r\n3. Status Code 304: There were no changes to the document\r\n4. Status Code 400: Invalid information in JSON\r\n5. Status Code 403: Unauthorized access\r\n"
				},
				{
					"name": "Search",
					"value": "Search",
					"description": "The ```search``` API is intended to query a collection of documents.  "
				},
				{
					"name": "Scroll",
					"value": "Scroll",
					"description": "The new `` scroll `` API has been developed to meet external integration scenarios. If you need to query the entire VTEX Master Data database, or your collection is over 10.000 documents, use this feature."
				},
				{
					"name": "Schemas",
					"value": "Schemas",
					"description": ""
				},
				{
					"name": "Indices",
					"value": "Indices",
					"description": "Create alternative keys for data entities."
				},
				{
					"name": "Clusters",
					"value": "Clusters",
					"description": "Lets you know if a particular document is in one or more clusters."
				},
				{
					"name": "Versions",
					"value": "Versions",
					"description": "Master Data documents are versioned. This means that for each change a new version is generated. The `versions` APIs allows to query the versions and also apply the state of a document to the most current version."
				},
				{
					"name": "Customer Profiles",
					"value": "Customer Profiles",
					"description": ""
				},
				{
					"name": "Addresses",
					"value": "Addresses",
					"description": ""
				}
			],
			"default": ""
		},
		...documentsDescription,
		...searchDescription,
		...scrollDescription,
		...schemasDescription,
		...indicesDescription,
		...clustersDescription,
		...versionsDescription,
		...customerProfilesDescription,
		...addressesDescription
		],
	};
}
