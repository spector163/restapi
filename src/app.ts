import express from 'express';
import config from 'config';
import log from './utils/logger';
import { connnectTODB } from './utils/connect';
import { routes } from './routes';
import { deserilizedUser } from './middleware/deserilizeUser';
const port = config.get<number>('port');

const app = express();false
app.use(express.json());
app.use(deserilizedUser);

app.listen(port, async () => {
    log.info(`App Started on http://localhost:${port}`);
    await connnectTODB();
    routes(app);
});
