import { NextFunction, Request, Response } from 'express';
import { AnyZodObject } from 'zod';

const validate = (schema: AnyZodObject) => (req: Request, res: Response, next: NextFunction) => {
	const result = schema.safeParse({
		body: req.body,
		params: req.params,
		query: req.query
	});
	if (!result.success) {
		const formatted = result.error.format();
		return res.status(400).send(formatted);
	}
	next();
};
export { validate };
