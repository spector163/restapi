import log from './logger';

function getNestedKey<T>(obj: T, path: string, defaultValue: ''): string {
	const keys = path.split('.');
	let result: any = obj;

	for (let key of keys) {
		if (result && typeof result === 'object' && key in result) {
			result = result[key];
		} else {
			return defaultValue;
		}
	}

	return result;
}
export { getNestedKey };
