import express from 'express';
import config from 'config';
import log from './utils/logger';
import { connnectTODB } from './utils/connect';
import { routes } from './routes';
const port = config.get<number>('port');

const app = express();
app.use(express.json());

app.listen(port, async () => {
	log.info(`App Started on http://localhost:${port}`);
	await connnectTODB();
	routes(app);
});
