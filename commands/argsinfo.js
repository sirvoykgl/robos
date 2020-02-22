module.exports =  {
    name: 'args-info',
    description: 'Informação sobre os argumentos',
	execute(message, args) {
		if(!args.length) {
            return message.channel.send(`Você não pronunciou nenhum Argumento, ${message.author}!`);
        }else if (args[0] === 'foo') {
            return message.channel.send('bar');
        }
        message.channel.send(`Argumentos: ${args}\nTamanho dos argumentos: ${args.length}`);
	},
};
