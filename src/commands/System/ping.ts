import { ApplyOptions } from '@sapphire/decorators';
import { ChatInputCommand, Command } from '@sapphire/framework';
import { DiscordSnowflake } from '@sapphire/snowflake';
import type { APIMessage } from 'discord-api-types';
import type { CommandInteraction, Message } from 'discord.js';

@ApplyOptions<ChatInputCommand.Options>({
	description: 'Runs a connection test to Discord.',
	chatInputCommand: {
		register: true
	}
})
export class UserCommand extends Command {
	public override async chatInputRun(...[interaction]: Parameters<ChatInputCommand['chatInputRun']>) {
		const message = await interaction.reply({ content: 'Ping?', ephemeral: true, fetchReply: true });

		const { difference, ping } = this.ping(message, interaction);

		return interaction.editReply(`Pong! (Roundtrip took: ${difference}ms. Heartbeat: ${ping}ms.)`);
	}

	private ping(message: APIMessage | Message, interaction: CommandInteraction): Record<'difference' | 'ping', number> {
		const timestamp = DiscordSnowflake.timestampFrom(message.id);
		const difference = timestamp - interaction.createdTimestamp;
		const ping = Math.round(this.container.client.ws.ping);

		return { difference, ping };
	}
}
