const { Client } = require("discord.js");
const keepAlive = require('./server.js');

const prefix = '$';
const code=process.env.CODE;
const attachment = new attachment()
const client = new Client({
  disableEveryone: true
});

client.on('message', message => {
  // If the message is "what is my avatar"
  if (!message.content.startsWith(prefix) || message.author.bot)return; 
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'pfp'){
      message.reply(message.author.displayAvatarURL());
    }

    if(command === 'code'){
      message.reply(message.channel.send('```' + code + '```'));
      console.log('works');
    }  
});
keepAlive();
client.login(process.env.TOKEN);