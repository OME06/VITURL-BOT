const fs = require("fs");
module.exports.config = {
	name: "fyoutoo",
    version: "1.1.1",
prefix: true,
	permssion: 0,
	credits: "John Lester", 
	description: "Just Respond",
	category: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("fuck")==0 || event.body.indexOf("Fuck")==0 || event.body.indexOf("fuck you")==0 || event.body.indexOf("Fuck you")==0 || event.body.indexOf("pakyu")==0 || event.body.indexOf("pak you")==0 || event.body.indexOf("Pak you")==0 || event.body.indexOf("pak u")==0 || event.body.indexOf("Pak u")==0|| event.body.indexOf("pak yu")==0|| event.body.indexOf("Pak yu")==0) {
		var msg = {
				body: "F you too",
				attachment: fs.createReadStream(__dirname + `/cache/fuck.gif`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

	}
