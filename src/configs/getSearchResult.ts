import { Client } from "@elastic/elasticsearch";

export async function getSearchData(client: Client) {
	const searchData = "Inter";
	const response = await client.search({
		index: 'movies',
		body: {
			query: {
				match_phrase_prefix: {
					title: searchData,
				}
			},

			size: 10
		}
	});

	console.log({ response: response.hits })

	for (let i = 0; i < response.hits.hits.length; i++) {
		console.log({ response: response.hits.hits[i]._source });
	}
}
