import { CLIENT_OPTIONS, TOKEN } from '#config';
import { MateriaClient } from '#lib/MateriaClient';

const client = new MateriaClient(CLIENT_OPTIONS);

try {
	await client.login(TOKEN);
} catch (error) {
	client.logger.fatal(error);
	client.destroy();
	process.exit(1);
}
