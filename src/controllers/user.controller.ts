import { Request, Response } from 'express';
import { createUserInput } from '../schema/user.schema';
import log from '../utils/logger';
import { createUser } from '../service/user.service';

export async function createuserHandler(req: Request<{}, {}, createUserInput['body']>, res: Response) {
	try {
		const user = await createUser(req.body);
		return res.send(user);
	} catch (e: any) {
		log.error(e);
		return res.status(409).send(e.message);
	}
}
