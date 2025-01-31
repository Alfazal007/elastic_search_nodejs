import { Client } from "@elastic/elasticsearch";

export async function getWithSomeMathches(client: Client) {
	/*
		const response = await client.search({
			index: 'movies',
			body: {
				query: {
					match: {
						director: "Nolan"
					}
				},
				from: 0,
				size: 2,
				sort: [
					{
						"year": {
							"order": "asc"
						}
					}
				]
			}
		});
	*/
	const response = await client.search({
		index: 'movies',
		body: {
			query: {
				match: {
					actor: "Someone1"
				}
			},
			from: 0,
			size: 2,
			sort: [
				{
					"year": {
						"order": "asc"
					}
				}
			]
		}
	});

	for (let i = 0; i < response.hits.hits.length; i++) {
		console.log(response.hits.hits[i])
	}
}
