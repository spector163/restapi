import { Request, Response } from 'express';
import { validatePassword } from '../service/user.service';
import { signJwt } from '../utils/jwt.utils';
import config from 'config';
import { createSession, findSessions, updateSession } from '../service/session.service';
export async function createUserSessionHandler(req: Request, res: Response) {
	//validate the users password
	const user = await validatePassword(req.body);
	if (!user) {
		return res.status(401).send('invalid email or passowrd');
	}

	//create a session
	const session = await createSession(user._id, req.get('user-agent') || '');
	//create and acess token
	const accessToken = signJwt({ ...user, session: session._id }, { expiresIn: config.get<string>('accessTokenTtl') });
	//crate a refresh token
	const refreshToken = signJwt({ ...user, session: session._id }, { expiresIn: config.get<string>('refreshTokenTtl') });

	//return access and refresh token
	return res.send({ accessToken, refreshToken });
}

export async function getUserSessionsHandler(req: Request, res: Response) {
	const userId = res.locals.user._id;
	const sessions = await findSessions({ user: userId, valid: true });
	return res.send(sessions);
}
export async function deleteSessionHandler(req: Request, res: Response) {
	const sessionId = res.locals.user.session;
	await updateSession({ _id: sessionId }, { valid: false });
	return res.send({
		accessToken: null,
		refreshToken: null
	});
}
