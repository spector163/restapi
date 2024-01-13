import { Express } from 'express';
import { validate } from './middleware/validateResource';
import { createUserSchema } from './schema/user.schema';
import { createuserHandler } from './controllers/user.controller';
import {
	createUserSessionHandler,
	deleteSessionHandler,
	getUserSessionsHandler
} from './controllers/session.controller';
import { createSessionSchema } from './schema/session.schema';
import { requireUser } from './middleware/requireUser';
export function routes(app: Express) {
	app.get('/healthcheck', (req, res) => res.sendStatus(200));

	app.post('/api/users', validate(createUserSchema), createuserHandler);

	app.post('/api/sessions', validate(createSessionSchema), createUserSessionHandler);

	app.get('/api/sessions', requireUser, getUserSessionsHandler);
	app.delete('/api/sessions', requireUser, deleteSessionHandler);
	app.delete('/api/sessions/:')
}
