const fs = require('fs');
const Discord = require('discord.js');
const {prefix, token} = require('./config.json');
const client = new Discord.Client();

//senha heroku eduardodll@123
client.commands =  new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));


client.once('ready', () => {
    console.log('O Bot foi iniciado com Sucesso!');
});

for(const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}
client.on('message', message =>{
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ + /);
    const command = args.shift().toLowerCase();


if (command === 'ping') {
    client.commands.get('ping').execute(message, args);
} else if (command === 'beep') {
    client.commands.get('beep').execute(message, args);
} else if (command === 'server') {
    client.commands.get('server').execute(message, args);
} else if (command === 'user-info') {
    client.commands.get('user-info').execute(message, args);
} else if (command === 'args-info') {
    client.commands.get('args-info').execute(message, args);
} else if (command === 'info') {
    client.commands.get('info').execute(message.args);
} 

  if (command.args && !args.length) {

    let reply = `Você não deu nenhum argumento, ${message.author}!`;
    
    if (command.usage) {
        reply += `\nA condição para usar esse comando seria: \`${prefix}${command.name} ${command.usage}\``;
    }
    return message.channel.send(reply);
  }  

});




client.login('NjE3NDc1NzI0NDYyMzkxMjk3.XlFSSw.h6Qless1Z3aYT1TngapeSAMn-TI')