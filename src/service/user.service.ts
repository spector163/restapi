import { FilterQuery } from 'mongoose';
import { User, userDocument, userInput } from '../models/user.model';
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

export async function validatePassword({ email, password }: { email: string; password: string }) {
	console.log(email, password);
	const user = await User.findOne({ email });
	if (!user) {
		return false;
	}
	const isValid = await user.comparePassword(password);
	if (!isValid) return false;
	return omit(user.toJSON(), 'password');
}

export async function findUser(query: FilterQuery<userDocument>) {
	return User.findOne(query).lean();
}
