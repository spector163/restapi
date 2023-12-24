import config from 'config'
import { connect } from 'mongoose'
import log from './logger';
async function connnectTODB() {
	const dbUri = config.get<string>('dbUri')
	try {
		await connect(dbUri, { family: 4 });
		log.info('Db Connected')
	} catch (e: any) {
		log.error('Error connecting to db', e)
	}
}
export { connnectTODB }