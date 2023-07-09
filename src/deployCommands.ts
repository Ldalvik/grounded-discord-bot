import { REST, Routes } from "discord.js"
import { config } from "./config"
import { commands } from "./commands"

const commandsData = Object.values(commands).map((command) => command.data);
const rest = new REST().setToken(config.DISCORD_TOKEN);

(async () => {
  const isRemoving = process.argv[2] !== undefined
  try {
    console.log(`Started ${ isRemoving ? "removing" : "reloading"} ${commandsData.length} application (/) commands.`)

    await rest.put(
      Routes.applicationCommands(config.DISCORD_CLIENT_ID),
      { body: commandsData }
    )

    console.log(`Successfully ${ isRemoving ? "removed" : "refreshed" } ${commandsData.length} application (/) commands.`)
  } catch (error) {
    console.error(error)
  }
})()