import { Logger } from '@sapphire/plugin-logger';
import { ClientOptions, Intents } from 'discord.js';

export const PREFIX = 'm!';

export const CLIENT_OPTIONS: ClientOptions = {
	caseInsensitiveCommands: true,
	caseInsensitivePrefixes: true,
	defaultPrefix: PREFIX,
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
	loadDefaultErrorListeners: false,
	logger: {
		instance: new Logger()
	},
	presence: {
		activities: [{ type: 'LISTENING', name: 'to Materia, help' }]
	}
};

export const TOKEN = '';
