import { object, string, z } from 'zod';

export const createUserSchema = object({
	body: object({
		name: string({ required_error: 'Name is required!' }),
		email: string({ required_error: 'Email isrequired' }).email({ message: 'Not a valid Email' }),
		password: string({ required_error: 'passowd is required' }).min(6, { message: 'Minimum lenght should be 6' }),
		confirmPassowrd: string({ required_error: 'passowd is required' }).min(6, { message: 'Minimum lenght should be 6' })
	}).refine(data => data.confirmPassowrd === data.password, {
		message: 'password do not match',
		path: ['confirmPassowrd']
	})
});

export type createUserInput = z.output<typeof createUserSchema>;
