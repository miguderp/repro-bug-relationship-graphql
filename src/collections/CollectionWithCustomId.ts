import { CollectionConfig } from "payload/types";

// Example Collection - For reference only, this must be added to payload.config.ts to be used.
const Examples: CollectionConfig = {
	slug: "collection-with-custom-id",
	admin: {
		useAsTitle: "someField",
	},
	fields: [
		{
			type: "number",
			name: "id",
			required: true,
			unique: true,
		},
		{
			name: "someField",
			type: "text",
		},
	],
};

export default Examples;
