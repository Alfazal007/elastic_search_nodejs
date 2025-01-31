import { addData } from "./configs/addData";
import { addRatings } from "./configs/addRatings";
import { createMapping } from "./configs/createMappings";
import { deleteData } from "./configs/deleteData";
import { deleteMapping } from "./configs/deleteMapping";
import { elasticClient } from "./configs/elasticClient";
import { getWithSomeMathches } from "./configs/getDataAgg1";
import { getAgger, getAgger2 } from "./configs/getDataAgg2";
import { getDataPaginatedAndSorted } from "./configs/getDataPaginated";
import { updateMappings } from "./configs/updateMappings";

async function main() {
	const client = await elasticClient();
	try {
		const resPing = await client.ping({ pretty: true })
		console.log({ resPing })
		await createMapping(client);
		await updateMappings(client);
		await deleteMapping(client);
		await addData(client);
		await deleteData(client);
		await getDataPaginatedAndSorted(client);
		await getWithSomeMathches(client);
		await addRatings(client);
		await getAgger(client);
		await getAgger2(client);
	} catch (err) {
		console.log("There was an error connecting")
		console.log(err);
	}
}

main()
