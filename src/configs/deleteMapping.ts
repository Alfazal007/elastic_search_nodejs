import { Client } from '@elastic/elasticsearch';

export async function deleteMapping(client: Client) {
	try {
		const moviesIndex = await client.indices.delete({
			index: "movies",
		});
		console.log(`Index movies created with mappings`);
		console.log(moviesIndex)
	} catch (error: any) {
		console.error(`Failed to delete index movies: ${error.message}`);
	}
}

