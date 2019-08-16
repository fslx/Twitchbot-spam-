var tmi = require('tmi.js');
var channel = 'channels'

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
    client.action(channel, "faaaaaather!!??")
})

client.on('chat', (channel, user, message, self) => {
    if (self) return;
    if (message === "dad?") {
        client.say(channel, ' ');
    }
    if (self) return;
    if (message === "not your father") {
        client.say(channel, 'Im a lost son :(');
    }
    if (self) return;
    if (message === "hello bot") {
        client.say(channel, 'bleep bloop');
    }
    if (self) return;
    if (message === "tekken") {
        client.say(channel, 'fiestyfgc is currently ranked at Mighty Ruler EU');
    }
    if (self) return;
    if (message === "!pepe") {
        client.say(channel, 'FeelsGoodMan');
    }
    if (self) return;
    if (message === "pog") {
        client.say(channel, 'PogChamp');
    }
    if (self) return;
    if (message === "MTG") {
        client.say(channel, 'Karn_t3 er faktisk best I byen');
    }
    if (self) return;
    if (message === "aris?") {
        client.say(channel, 'shoot that stoner!');
    }
    if (self) return;
    if (message === "markman?") {
        client.say(channel, 'that rage art is not gonna kill! IT KILLED!');
    }
    if (self) return;
    if (message === "tastysteve?") {
        client.say(channel, 'bambambammbam, thats some good ASS TEKKEN');
    }
    if (self) return;
    if (message === "henlo stinky") {
        client.say(channel, 'go eat a byte stupid');
    }
    if (self) return;
    if (message === "fuck") {
        client.say(channel, 'heyy HEY, frick!');
    }
    if (self) return;
    if (message === '!d2') {
        client.say(channel, 'FINNA D2');
    }
    if (self) return;
    if (message === "succ") {
        client.say(channel, 'gib succ');
    }
    if (self) return;
    if (message === "b0ss") {
        client.say(channel, 'Ey B0ss');
    }
    if (self) return;
    if (message === "Ross") {
        client.say(channel, 'KappaRoss, paint the devil away');
    }
    if (self) return;
    if (message === "Kazuya") {
        client.say(channel, 'DORYA');
    }
    if (self) return;
    if (message === "Heihachi") {
        client.say(channel, 'SORYA');
    }
    if (self) return;
    if (message === "Hworang") {
        client.say(channel, 'spamspamspam');
    }
    if (self) return;
    if (message === "Dragunov") {
        client.say(channel, 'errghgh');
    }
    if (self) return;
    if (message === "iwr2bo") {
        client.action(user, 'beep boop!');
    }
    if (self) return;
    if (message === "pride") {
        client.say(channel, 'KappaPride');
    }
    if (self) return;
    if (message === "kappa") {
        client.say(channel, 'Kappa');
    }
    if (self) return;
    if (message === "son") {
        client.say(channel, 'Im a lost son');
    }
    if (self) return;
    if (message === "fucking") {
        client.say(channel, 'hey HEY, keep it down will ya!');
    }
    if (self) return;
    if (message === 'Pog') {
        client.say(channel, 'PogChamp');
    }

    client.action("channel to enter here", `FATHER ${user['display-name']}!`);
})