import { Document, Schema, Types, model } from 'mongoose';

import { userDocument } from './user.model';

export interface sessionDocument extends Document {
	user: userDocument['_id'];
	valid: boolean;
	userAgent: string;
	createdAt: Date;
	updatedAt: Date;
}

const sessionSchema = new Schema<sessionDocument>(
	{
		user: { type: Types.ObjectId, required: true, ref: 'User' },
		valid: { type: Boolean, default: true },
		userAgent: { type: String }
	},
	{
		timestamps: true
	}
);

export const Session = model('Session', sessionSchema);
