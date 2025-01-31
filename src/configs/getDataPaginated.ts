import { Client } from "@elastic/elasticsearch";

export async function getDataPaginatedAndSorted(client: Client) {
	const response = await client.search({
		index: 'movies',
		body: {
			query: {
				match_all: {}
			},
			from: 0,
			size: 2,
			sort: [
				{
					"year": {
						"order": "asc" // "desc"
					}
				}
			]
		}
	});
	for (let i = 0; i < response.hits.hits.length; i++) {
		console.log(response.hits.hits[i])
	}
}
