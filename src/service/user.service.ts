import { User, userInput } from '../models/user.model';

export async function createUser(input: userInput) {
	try {
		const { password, ...user } = (await User.create(input)).toJSON();
		return user;
	} catch (e: any) {
		throw new Error(e);
	}
}
