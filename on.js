╭━━━━-╮
╰┃ ┣▇━▇
 ┃ ┃ ╰━▅╮ 
 ╰┳╰━━┳╯
 ╰╮ ┳━━╯ 
 ▕▔▋ ╰╮╭━╮ 
╱▔╲▋╰━┻┻╮╲╱▔▔▔╲
▏ ▔▔▔▔▔▔▔ O O┃ 
╲╱▔╲▂▂▂▂╱▔╲▂▂▂╱
 ▏╳▕▇▇▕ ▏╳▕▇▇▕
 ╲▂╱╲▂╱ ╲▂╱╲▂╱
 
 
</Peka>
BOT
Hoje às 15:00

 __     _____ ____   ____ _   _ _        _    ____  _  __
 \ \   / /_ _|  _ \ / ___| | | | |      / \  |  _ \| |/ /
  \ \ / / | || |_) | |  _| | | | |     / _ \ | |_) | ' / 
   \ V /  | ||  _ <| |_| | |_| | |___ / ___ \|  __/| . \ 
    \_/  |___|_| \_\\____|\___/|_____/_/   \_\_|   |_|\_\
                                                         
client.on('ready', () => {
	let activities = [
			`PK - ${config.prefix}`,
			`PK - ${client.guilds.cache.size}`,
			`PK - ${client.channels.cache.size}`,
			`PK - ${client.users.cache.size}`
		],
		i = 0;
	setInterval(
		() =>
			client.user.setActivity(`${activities[i++ % activities.length]}`, {
				type: 'WATCHING'
			}),
		1000 * 60
	);
	client.user.setStatus('dnd').catch(console.error);
		console.log('╠═══════════( Login )')
		console.log(`╠═══════════(Logado como ${client.user.tag}`);
		console.log('╠═══════════( Servers )')
		console.log(`╠═══════════(Ativo em ${client.guilds.cache.size})`)
    console.log(
		`╠═══════════( PING RECEBIDO ÁS 0:00:00 )═══════════╣`
	)
});

client.login(process.env.TOKEN);
