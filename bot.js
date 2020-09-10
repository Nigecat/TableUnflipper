const { Client, Intents } = require("discord.js");
const client = new Client({
    ws: {
        intents: Intents.NON_PRIVILEGED
    },
    presence: {
        status: "online",
        activity: {
            type: "WATCHING",
            name: "your tables",
        },
    },
});

client.on("message", (message) => {
    // Ignore bot messages
    if (message.author.bot) return;

    if (message.content.includes("(╯°□°）╯︵ ┻━┻")) {
        message.channel.send("┬─┬ ノ(¬_¬ノ)");
    }
});

client.login(process.env.DISCORD_TOKEN);
