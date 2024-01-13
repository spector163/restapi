import { NextFunction, Request, Response } from 'express';
import { getNestedKey } from '../utils/getNestedKey';
import log from '../utils/logger';
import { verifyJwt } from '../utils/jwt.utils';
import { reIssueAccessToken } from '../service/session.service';

export const deserilizedUser = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const accessToken = getNestedKey(req, 'headers.authorization', '').replace(
		/^Bearer\s/,
		''
	);
	const refreshToken = getNestedKey(req, 'headers.x-refresh', '');
	if (!accessToken) {
		return next();
	}
	const { decoded, expired } = verifyJwt(accessToken);
	console.log(decoded);
	if (decoded) {
		res.locals.user = decoded;
		return next();
	}

	if (expired && refreshToken) {
		const newAccessToken = await reIssueAccessToken({ refreshToken });
		if (newAccessToken) {
			res.setHeader('x-access-token', newAccessToken);
			const result = verifyJwt(newAccessToken);
			res.locals.user = result.decoded;
		}
		return next();
	}
	return next();
};
