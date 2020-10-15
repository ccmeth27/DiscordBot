const express = require('express');
const app = express();
const port = 3000;
const fetch = require('node-fetch');

app.get('/', (req, res) => res.send('LyonsShare Stocktwits Discord.js Bot'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

//bot code

const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async(msg) => {
  if (msg.content === '!watchlist') {
  }
});
    
client.login(process.env.DISCORD_TOKEN);