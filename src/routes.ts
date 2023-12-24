import { Express } from 'express';
import { validate } from './middleware/validateResource';
import { createUserSchema } from './schema/user.schema';
import { createuserHandler } from './controllers/user.controller';
export function routes(app: Express) {
	app.get('/healthcheck', (req, res) => res.sendStatus(200));

	app.post('/api/users', validate(createUserSchema), createuserHandler);
}
