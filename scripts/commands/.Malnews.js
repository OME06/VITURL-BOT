module.exports.config = {
  name: "malnews",
  version: "3.1.1",
  permssion: 0,
  prefix: true,
  credits: "Nayan",
  description: "Get fuck",
  category: "img",
  usages: "[@mention]",
  cooldowns: 5,
  dependencies: {
      "axios": "",
      "fs-extra": "",
      "path": "",
      "jimp": ""
  }
};
module.exports.run = async function({ api, event }) {
const malScraper = require('mal-scraper');
  const axios = require('axios');
  const nbNews = 5

malScraper.getNewsNoDetails(nbNews)
  .then((n) => api.sendMessage("Top 5 latest my anime list news:\n\n【 1 】"+n[0].title+"\n\n【 2 】"+n[1].title+"\n\n【 3 】"+n[2].title+"\n\n【 4 】"+n[3].title+"\n\n【 5 】"+n[4].title,event.threadID,event.messageID))
  .catch((err) => console.log(err))
