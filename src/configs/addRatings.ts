import { Client } from '@elastic/elasticsearch';

export async function addRatings(client: Client) {
	const document = {
		title: "Interstellar",
		rating: 1.5
	}

	const document1 = {
		title: "Dune",
		rating: 1.5
	}

	const document2 = {
		title: "Inception",
		rating: 3
	}

	const document3 = {
		title: "Ad Astra",
		rating: 2
	}

	const document4 = {
		title: "Interstellar",
		rating: 1.5
	}

	const document5 = {
		title: "Interstellar",
		rating: 2
	}

	const document6 = {
		title: "Interstellar",
		rating: 3
	}

	try {
		await client.index({
			index: "ratings",
			document
		});
		/*
		await client.index({
			index: "ratings",
			document: document1
		}); await client.index({
			index: "ratings",
			document: document2
		}); await client.index({
			index: "ratings",
			document: document3
		});
		*/
		await client.index({
			index: "ratings",
			document: document4
		}); await client.index({
			index: "ratings",
			document: document5
		}); await client.index({
			index: "ratings",
			document: document6
		})
		console.log("added")
	} catch (error: any) {
		console.error(`Failed to create index: ${error.message}`);
	}
}
