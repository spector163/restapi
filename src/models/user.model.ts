import { Document, Schema, model } from 'mongoose';
import config from 'config';
import bcrypt from 'bcrypt';

export interface userInput {
	name: string;
	email: string;
	password: string;
}

export interface userDocument extends Document, userInput {
	createdAt: Date;
	updatedAt: Date;
	comparePassword: (candidatePassword: string) => Promise<boolean>;
}

const userSchema = new Schema<userDocument>(
	{
		name: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true }
	},
	{
		timestamps: true
	}
);

userSchema.pre('save', async function (this, next) {
	let user = this;
	if (!user.isModified('password')) {
		return next();
	}
	const salt = await bcrypt.genSalt(config.get<number>('saltWorkFactor'));
	const hash = await bcrypt.hash(user.password, salt);
	user.password = hash;

	return next();
});

userSchema.methods.comparePassword = async function (this, candidatePassword: string): Promise<boolean> {
	const user = this;
	return bcrypt.compare(candidatePassword, user.password).catch(e => false);
};

export const User = model('User', userSchema);
