client.on("message", async message=>{
if(message.author.bot) return;
const args = message.content.slice(2).trim().split(/ +/g);
const command = args.shift().toLowerCase();
var admin = "";
if (message.author.id === "userID") {
admin = ":crown:";
}
    if(message.channel.name == ("global-chat")){
        message.delete();
        const ch_name = "global-chat";
        client.channels.cache.forEach(ch => {
            if(ch.name === ch_name){
                ch.send({embed: {
                    title: `${admin}${message.author.tag}(${message.author.id})`,
                    description: message.content,
                    color: 0x800080,
                    timestamp: new Date(),
                    footer: {
                        text: message.guild.name + "(" + message.guild.id + ")"
                    },
                    thumbnail: {
                        url: `https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.png`
                    }
}})}})};
