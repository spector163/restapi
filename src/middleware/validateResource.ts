import { NextFunction, Request, Response } from 'express';
import { AnyZodObject } from 'zod';
import { formatErrors } from '../utils/formatErrors';

const validate = (schema: AnyZodObject) => (req: Request, res: Response, next: NextFunction) => {
	const result = schema.safeParse({
		body: req.body,
		params: req.params,
		query: req.query
	});
	if (!result.success) {
		return res.status(400).send(formatErrors(result.error));
	}
	next();
};
export { validate };
