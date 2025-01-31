import { Client } from '@elastic/elasticsearch';

export async function addData(client: Client) {
	// note:: Even if the data is not of proper format it will be indexed and performance will take a hit
	const document = {
		year: 2024,
		title: "Interstellar",
		description: "This is a movie about space and time",
		director: "Christopher Nolan",
		actor: "Someone1"
	}

	/*
		const document1 = {
			year: 2023,
			title: "Dune",
			description: "A science fiction epic set on the desert planet Arrakis.",
			director: "Denis Villeneuve",
			actor: "Someone2"
		};
	
		const document2 = {
			year: 2010,
			title: "Inception",
			description: "A mind-bending thriller about dreams within dreams.",
			director: "Christopher Nolan",
			actor: "Someone1"
		}
	
		const document3 = {
			year: 2019,
			title: "Ad Astra",
			description: "A journey through space to find a missing astronaut father.",
			director: "James Gray",
			actor: "Someone1"
		};
	*/

	try {
		const moviesIndex = await client.index({
			index: "movies",
			document
		});
		console.log(`Index movies created with mappings`);
		console.log(moviesIndex)
	} catch (error: any) {
		console.error(`Failed to create index: ${error.message}`);
	}
}

