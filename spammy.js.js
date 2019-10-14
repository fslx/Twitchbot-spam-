var tmi = require('tmi.js');
var channel = 'channels' - ///ethically this should be in YOUR channel only, It counts as 1 viewer.

var config = {
    options: {
        debug: true,
    },
    connection: {
        cluster: "aws",
        reconnect: true,
    },
    identity: {
        username: "username here",
        password: "auth key here",
    },
    channels: ['channels to enter here',],
}

var client = new tmi.client(config);
client.connect();

client.on("connected", (address, port) => {
    client.action(channel, "!!??")
})

client.on('chat', (channel, user, message, self) => {
    if (self) return;
    if (message === "any phrase") {
        client.say(channel, 'return any phrase ');
    }
    

    client.action(channel, `phrase ${user['display-name']}!`);              /// this one is super spammy and It will get the bot
                                                                            /// banned without any doubt
                                                                            
    client.action(your channel here, `"Hello World" ${user['display-name']}!`); /// outputs name of the user and greets with "Hello World"
                                                                                /// should in theory ONLY respond to "Hello World"
                                                                                /// altho I have seen it go nuts with replies a few times.
                                                                                /// I'm still looking into why this happens.
})  

if (self) return;
if (message === "!disconnect") {
    client.action(disconnect);
}
///this will kill the bots connection to every channel it's roaming in, it's not the best solution, but it's the only one I currently have



///I'm editing variables and phrases alot as I build this annoying little bot, I'm also running a little Python code that I will
///get around to posting as soon as I develop it further.
