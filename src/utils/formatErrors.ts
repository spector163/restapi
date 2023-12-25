import { ZodError } from 'zod';

interface ZodIssue {
	code: string;
	expected: string;
	received: string;
	path: string[];
	message: string;
}

export function formatErrors(error: ZodError): Record<string, string> {
	let formattedErrors: Record<string, string> = {};

	error.issues.forEach(issue => {
		let key = issue.path.join('.'); // join path array to a string
		formattedErrors[key] = issue.message;
	});

	return formattedErrors;
}
