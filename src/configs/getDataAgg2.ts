import { Client } from "@elastic/elasticsearch";

export async function getAgger(client: Client) {
	const response = await client.search({
		index: 'ratings',
		body: {
			size: 0,
			aggs: {
				grouped_ratings: {
					terms: {
						field: 'rating',
						size: 10
					}
				}
			}
		}
	});

	// @ts-ignore
	for (let i = 0; i < response.aggregations.grouped_ratings.buckets.length; i++) {
		// @ts-ignore
		console.log(response.aggregations.grouped_ratings.buckets[i])
	}
}

export async function getAgger2(client: Client) {
	const response = await client.search({
		index: 'ratings',
		body: {
			query: {
				match: {
					title: "Interstellar"
				}
			},
			size: 0,
			aggs: {
				grouped_ratings: {
					terms: {
						field: 'rating',
						size: 10
					}
				}
			}
		}
	});
	// @ts-ignore
	for (let i = 0; i < response.aggregations.grouped_ratings.buckets.length; i++) {
		// @ts-ignore
		console.log(response.aggregations.grouped_ratings.buckets[i])
	}
}
