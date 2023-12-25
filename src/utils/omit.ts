function omit<T, K extends keyof T>(object: T, key: K): Omit<T, K> {
	const { [key]: _, ...rest } = object;
	return rest;
}
export { omit };
