import { CollectionConfig } from "payload/types";

// Example Collection - For reference only, this must be added to payload.config.ts to be used.
const Examples: CollectionConfig = {
	slug: "examples",
	admin: {
		useAsTitle: "someField",
	},
	fields: [
		{
			type: "relationship",
			name: "relation_that_works_in_graphql",
			relationTo: "collection-without-custom-id",
		},
		{
			type: "relationship",
			name: "relation_that_does_not_work_in_graphql",
			relationTo: "collection-with-custom-id",
		},
		{
			name: "someField",
			type: "text",
		},
	],
};

export default Examples;
