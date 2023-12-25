import { User, userInput } from '../models/user.model';
import log from '../utils/logger';
import { omit } from '../utils/omit';

export async function createUser(input: userInput) {
	try {
		const isUser = await User.findOne({ email: input.email });
		if (isUser) {
			throw new Error('Email already registered!');
		}
		const user = await User.create(input);
		return omit(user.toJSON(), 'password');
	} catch (e: any) {
		throw new Error(e);
	}
}
