import { BaseInteraction, Client, Interaction } from "discord.js";
import { config } from "./config";
import { commands } from "./commands";
import fs from "fs";

export const client = new Client({
  intents: ["Guilds", "GuildMessages", "DirectMessages"],
})

client.once("ready", async () => {
  console.log("Discord bot is ready!")
  
})

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return
  let userData: UserProfile[] = JSON.parse(fs.readFileSync('src/userdata.json', 'utf-8'))
  const user = userData.find((user) => interaction.user.id === user.id)
  if(!user && interaction.commandName !== "start") {
    await interaction.reply({ content: "Looks like you havent started a profile yet! Use the /start command to create one.", ephemeral: true })
    return
  }
  const command = commands[interaction.commandName as keyof typeof commands]
  if (command) command.execute(interaction)
})

client.login(config.DISCORD_TOKEN);
