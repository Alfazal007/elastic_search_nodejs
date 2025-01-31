import { Client } from '@elastic/elasticsearch';
import fs from "fs"
import path from "path"

export async function elasticClient() {
	const certPath = path.join(__dirname, "../../certer.crt") // this file is from docker
	const client = new Client({
		node: 'https://127.0.0.1:9200',
		auth: {
			username: 'elastic',
			password: 'Q9YdVPU_V7J-q+7GU0Qm'
		},
		tls: {
			ca: fs.readFileSync(certPath, "utf8")
		}
	});
	return client;
}
