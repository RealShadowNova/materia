import { SapphireClient, Store } from '@sapphire/framework';
import type { ClientOptions } from 'discord.js';

export class MateriaClient extends SapphireClient {
	public constructor(options: ClientOptions) {
		super(options);

		Store.defaultStrategy.onLoad = (store, piece) => this.logger.info(`Loading ${store.name}:${piece.name}`);
	}

	public fetchPrefix = () => 'm!';
}
