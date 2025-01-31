import { Client } from "@elastic/elasticsearch";

export async function deleteData(client: Client) {
	try {
		await client.delete(
			{
				id: "UiKYvZQBgubPiM-_we-X",
				index: "movies"
			}
		)
	} catch (err: any) {
		console.log("Issue deleting data from index")
		console.log(err)
	}
}
