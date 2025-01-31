import { Client } from '@elastic/elasticsearch';

export async function createMapping(client: Client) {
	try {
		const moviesIndex = await client.indices.create({
			index: "movies",
			body: {
				mappings: {
					properties: {
						year: {
							type: "date"
						},
						title: {
							type: "search_as_you_type"
						},
						description: {
							type: "text"
						}
					}
				}
			}
		});
		console.log(`Index movies created with mappings`);
		console.log(moviesIndex)
		const ratingIndex = await client.indices.create({
			index: "ratings",
			body: {
				mappings: {
					properties: {
						title: {
							type: "keyword"
						},
						rating: {
							type: "float"
						}
					}
				}
			}
		});
		console.log(`Index ratings created with mappings`);
		console.log(ratingIndex)
	} catch (error: any) {
		console.error(`Failed to create index: ${error.message}`);
	}
}

// ideally seperate the above two
