# Sergio's Bot
### Discord.js bot
Creating a discord bot using [Discord.js](https://discord.js.org/) for my [server](https://discord.gg/bcTPQKWWuA). Bot's main features:

* Attach files
```
const attachment = new Attachment(File Path);
    if(command === 'code'){
      message.reply(message.channel.send(message.author, attachment));
    }  
```
* Send **Emails** to the users 

* Create **Timers and Counters** and display them when requested

* Create **Reminders**

* Create **Server Events**

* Send **Memes** obtained through an API

* Embed **Code**
```
const code= toString(File with code);
    if(command === 'code'){
      message.reply(message.channel.send('```' + code + '```'));
    }  
```
Coded entirely javascript using the library discord.js.

<img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
     alt="Js icon"
     height="120px"
     style="float: none; margin-right: 10px;" />
     
<img src="https://i.stack.imgur.com/lZyF4.png"
     alt="env icon"
     height="120px"
     style="float: none;left: 250px;" />
     
