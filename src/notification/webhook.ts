import { Link, Store } from '../store/model';
import { Print, logger } from '../logger';
import { config } from '../config';
import fetch from 'node-fetch';

const webhook = config.notifications.webhook;

export function callWebHook(link: Link, store: Store) {
	const urls = [webhook.url, webhook.url2, webhook.url3];

	for (const i in urls) {
		const url = urls[i];

		if (url) {
			logger.debug(url);
			fetch(url, { method: 'GET' })
				.then(() => logger.info(`✔ ${url} called`))
				.catch((error) =>
					logger.error(`✖ couldn't call ${url}`, error)
				);
		}
	}
}