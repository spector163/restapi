import { Express } from "express";
export function routes(app: Express) {
	app.get('/healthcheck', (req, res) => res.sendStatus(200));
}