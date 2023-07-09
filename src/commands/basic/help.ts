import { CommandInteraction, SlashCommandBuilder } from "discord.js";

export const data = new SlashCommandBuilder()
  .setName("help")
  .setDescription("Get help on where to start")

export async function execute(interaction: CommandInteraction) {
  return interaction.reply("Placeholder help command")
}