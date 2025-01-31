import { Client } from '@elastic/elasticsearch';

export async function updateMappings(client: Client) {
	try {
		const moviesIndex = await client.indices.putMapping({
			index: "movies",
			body: {
				properties: {
					director: {
						type: "text"
					},
					actor: {
						type: "keyword"
					}
				}
			}
		});
		console.log(`Index movies created with updated`);
		console.log(moviesIndex)
	} catch (error: any) {
		console.error(`Failed to update index: ${error.message}`);
	}
}
