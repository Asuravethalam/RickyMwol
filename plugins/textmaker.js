  

let WhatsAlexa = require('../events');

let Config = require('../config');

let {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');

let fs = require('fs');

let axios = require('axios');

let Language = require('../language');

let Lang = Language.getString('ttp');

let td = Config.WORKTYPE == 'public' ? false : true

let tdc = '*Made By WhatsAlexa*'

    WhatsAlexa.addCommand({pattern: 'textmaker', fromMe: td, desc: Lang.TEXT_MAKER}, (async (message, match) => {    

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://xteam.xyz/textpro/helloweenfire?text=WhatsAlexa%20%20%20%20%20%20%20%20%20Made%20By%20Toxic%20Devil&APIKEY=${Config.XTEAM_API}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.png, caption: '💻Usage: *#glitch*\nℹ️Desc: It Sends a glitch style image of the text provided.\nYou must enter the heading and subheading seperated by */* in order!.\n\n💻Usage: *#pornhub*\nℹ️Desc: It Sends a blackish orange coloured image of the text provided.\nYou must enter the heading and subheading seperated by */* in order!.\n\n💻Usage: *#sandwriting*\nℹ️Desc: It Sends a sand image of the text provided.\n\n💻Usage: *#blackpink*\nℹ️Desc: It Sends a blackish pink image of the text provided.\n\n💻Usage: *#luxury*\nℹ️Desc: It Sends 3D Golden Luxury Font style image of the text provided.\n\n💻Usage: *#metalgold*\nℹ️Desc: It Sends an image of the gold metal font of text provided.\n\n💻Usage: *#blood*\nℹ️Desc: It Sends a blood image of the text provided.\n\n💻Usage: *#led*\nℹ️Desc: It Sends an image with led font of the text provided.\n\n💻Usage: *#glue*\nℹ️Desc: It Sends an image of the provided text in glue font.\n\n💻Usage: *#snow*\nℹ️Desc: It Sends a snow image of the text provided.\n\n💻Usage: *#cloud*\nℹ️Desc: It Sends a sky image of the text provided\n\n💻Usage: *#metalblue*\nℹ️Desc: It Sends a bule metelled fonted image of the text provided\n\n💻Usage: *#metalpink*\nℹ️Desc: It Sends a pink metalled fonted image of the text provided\n\n💻Usage: *#holographic*\nℹ️Desc: It Sends a 3D Holograhic font image of the text provided\n\n💻Usage: *#minion*\nℹ️Desc: It Sends a minion font image of the text provided\n\n💻Usage: *#joker*\nℹ️Desc: It Sends a joker logo of the text provided.\n\n💻Usage: *#flame*\nℹ️Desc: It Converts text to to flaming effect.\n\n💻Usage: *#pokemon*\nℹ️Desc: Converts the text into a pokemon image.\nYou must enter the heading and subheading seperated by */* in order!\n\n💻Usage: *#marvel*\nℹ️Desc: Converts the text into marvel logo image.\n\n💻Usage: *#harrypotter*\nℹ️Desc: Converts the text into a harrypotter themed image.\n\n💻Usage: *#sparkling*\nℹ️Desc: Converts the text into a sparkling themed image\nYou must enter the heading and subheading seperated by */* in order!\n\n💻Usage: *#watercolour*\nℹ️Desc: Converts the text into a watercolour themed image.\n\n💻Usage: *#ninjalogo*\nℹ️Desc: Enters the text as the caption for a ninja themed logo.\n\n💻Usage: *#neonlight*\nℹ️Desc: Converts the text into a neonlight themed image.\n\n💻Usage: *#3dtext*\nℹ️Desc: Converts the provided text into a 3D style image.', contextInfo: { forwardingScore: 49, isForwarded: true }, quoted: message.data})

    }));

    WhatsAlexa.addCommand({pattern: 'glitch ?(.*)', fromMe: td, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

  

  var topText, bottomText;

    if (match[1].includes('/')) {

        var split = match[1].split('/');

        bottomText = split[1];

        topText = split[0];

}

    var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/ttlogo?text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.png, caption: tdc, contextInfo: { forwardingScore: 49, isForwarded: true }, quoted: message.data})

    }));

    WhatsAlexa.addCommand({pattern: 'blackpink ?(.*)', fromMe: td, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/blackpink?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.png, caption: tdc, contextInfo: { forwardingScore: 49, isForwarded: true }, quoted: message.data})

    }));

    WhatsAlexa.addCommand({pattern: 'flame ?(.*)', fromMe: td, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://xteam.xyz/photooxy/flaming?text=${match[1]}&APIKEY=${Config.XTEAM_API}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.png, caption: tdc, contextInfo: { forwardingScore: 49, isForwarded: true }, quoted: message.data})

    }));

    WhatsAlexa.addCommand({pattern: 'joker ?(.*)', fromMe: td, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://xteam.xyz/textpro/jokerlogo?text=${match[1]}&APIKEY=${Config.XTEAM_API}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.png, caption: tdc, contextInfo: { forwardingScore: 49, isForwarded: true }, quoted: message.data})

    }));

    WhatsAlexa.addCommand({pattern: 'pokemon ?(.*)', fromMe: td, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

  

    var webimage = await axios.get(`https://xteam.xyz/photooxy/pokemon?text=${match[1]}&APIKEY=${Config.XTEAM_API}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.png, caption: tdc, contextInfo: { forwardingScore: 49, isForwarded: true }, quoted: message.data})

    }));

    WhatsAlexa.addCommand({pattern: 'marvel ?(.*)', fromMe: td, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

  

  var topText, bottomText;

    if (match[1].includes('/')) {

        var split = match[1].split('/');

        bottomText = split[1];

        topText = split[0];

}

    var webimage = await axios.get(`https://xteam.xyz/textpro/3davengers?text=${topText}&text2=${bottomText}&APIKEY=${Config.XTEAM_API}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.png, caption: tdc, contextInfo: { forwardingScore: 49, isForwarded: true }, quoted: message.data})

    })); 

    WhatsAlexa.addCommand({pattern: 'metalblue ?(.*)', fromMe: td, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://xteam.xyz/textpro/glossybluemetal?text=${match[1]}&APIKEY=${Config.XTEAM_API}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.png, caption: tdc, contextInfo: { forwardingScore: 49, isForwarded: true }, quoted: message.data})

    }));

    WhatsAlexa.addCommand({pattern: 'metalpink ?(.*)', fromMe: td, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://xteam.xyz/textpro/metalpurpledual?text=${match[1]}&APIKEY=${Config.XTEAM_API}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.png, caption: tdc, contextInfo: { forwardingScore: 49, isForwarded: true }, quoted: message.data})

    }));

    WhatsAlexa.addCommand({pattern: 'holographic ?(.*)', fromMe: td, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://xteam.xyz/textpro/holographic3d?text=${match[1]}&APIKEY=${Config.XTEAM_API}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.png, caption: tdc, contextInfo: { forwardingScore: 49, isForwarded: true }, quoted: message.data})

    }));

    WhatsAlexa.addCommand({pattern: 'minion ?(.*)', fromMe: td, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://xteam.xyz/textpro/minion3d?text=${match[1]}&APIKEY=${Config.XTEAM_API}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.png, caption: tdc, contextInfo: { forwardingScore: 49, isForwarded: true }, quoted: message.data})

    }));

    WhatsAlexa.addCommand({pattern: 'halloween ?(.*)', fromMe: td, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://xteam.xyz/textpro/helloweenfire?text=${match[1]}&APIKEY=${Config.XTEAM_API}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.png, caption: tdc, contextInfo: { forwardingScore: 49, isForwarded: true }, quoted: message.data})

    }));

    WhatsAlexa.addCommand({pattern: 'sparkling ?(.*)', fromMe: td, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

  

  var topText, bottomText;

    if (match[1].includes('/')) {

        var split = match[1].split('/');

        bottomText = split[1];

        topText = split[0];

}

    var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/sparkling?text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.png, caption: tdc, contextInfo: { forwardingScore: 49, isForwarded: true }, quoted: message.data})

    }));

    WhatsAlexa.addCommand({pattern: 'watercolour ?(.*)', fromMe: td, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/watercolor?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.png, caption: tdc, contextInfo: { forwardingScore: 49, isForwarded: true }, quoted: message.data})

    }));

    WhatsAlexa.addCommand({pattern: 'ninjalogo ?(.*)', fromMe: td, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.NEED_WORD);

    var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/gaming?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.png, caption: tdc, contextInfo: { forwardingScore: 49, isForwarded: true }, quoted: message.data})

    }));

    WhatsAlexa.addCommand({pattern: 'neonlight ?(.*)', fromMe: td, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/neon_light?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.png, caption: tdc, contextInfo: { forwardingScore: 49, isForwarded: true }, quoted: message.data})

    }));

    WhatsAlexa.addCommand({pattern: 'sandwriting ?(.*)', fromMe: td, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/sandwriting?text=${match[1]}&APIKEY=${Config.XTEAM_API}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.png, caption: tdc, contextInfo: { forwardingScore: 49, isForwarded: true }, quoted: message.data})

    }));

    WhatsAlexa.addCommand({pattern: 'cloud ?(.*)', fromMe: td, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/cloudtext?text=${match[1]}&APIKEY=${Config.XTEAM_API}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.png, caption: tdc, contextInfo: { forwardingScore: 49, isForwarded: true }, quoted: message.data})

    }));

    WhatsAlexa.addCommand({pattern: 'pornhub ?(.*)', fromMe: td, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

  

  var topText, bottomText;

    if (match[1].includes('/')) {

        var split = match[1].split('/');

        bottomText = split[1];

        topText = split[0];

}

    var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/phblogo?text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.png, caption: tdc, contextInfo: { forwardingScore: 49, isForwarded: true }, quoted: message.data})

    }));

    WhatsAlexa.addCommand({pattern: 'snow ?(.*)', fromMe: td, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/snowtext?text=${match[1]}&APIKEY=${Config.XTEAM_API}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.png, caption: tdc, contextInfo: { forwardingScore: 49, isForwarded: true }, quoted: message.data})

    }));

    WhatsAlexa.addCommand({pattern: 'metalgold ?(.*)', fromMe: td, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://xteam.xyz/textpro/metaldarkgold?text=${match[1]}&APIKEY=${Config.XTEAM_API}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.png, caption: tdc, contextInfo: { forwardingScore: 49, isForwarded: true }, quoted: message.data})

    }));

    WhatsAlexa.addCommand({pattern: 'glue ?(.*)', fromMe: td, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://xteam.xyz/textpro/3dglue?text=${match[1]}&APIKEY=${Config.XTEAM_API}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.png, caption: tdc, contextInfo: { forwardingScore: 49, isForwarded: true }, quoted: message.data})

    }));

    WhatsAlexa.addCommand({pattern: 'led ?(.*)', fromMe: td, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

  var topText, bottomText;

    if (match[1].includes('/')) {

        var split = match[1].split('/');

        bottomText = split[1];

        topText = split[0];

}

    var webimage = await axios.get(`https://xteam.xyz/textpro/realisticvintage?text=${topText}&text2=${bottomText}&APIKEY=${Config.XTEAM_API}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.png, caption: tdc, contextInfo: { forwardingScore: 49, isForwarded: true }, quoted: message.data})

    }));

    WhatsAlexa.addCommand({pattern: 'luxury ?(.*)', fromMe: td, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://xteam.xyz/textpro/3dluxury?text=${match[1]}&APIKEY=${Config.XTEAM_API}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.png, caption: tdc, contextInfo: { forwardingScore: 49, isForwarded: true }, quoted: message.data})

    }));

    WhatsAlexa.addCommand({pattern: 'blood ?(.*)', fromMe: td, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/bloodontheroastedglass?text=${match[1]}&APIKEY=${Config.XTEAM_API}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.png, caption: tdc, contextInfo: { forwardingScore: 49, isForwarded: true }, quoted: message.data})

    }));

    WhatsAlexa.addCommand({pattern: 'blackpink ?(.*)', fromMe: td, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/blackpink?text=${match[1]}&APIKEY=${Config.XTEAM_API}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.png, caption: tdc, contextInfo: { forwardingScore: 49, isForwarded: true }, quoted: message.data})

    }));

    WhatsAlexa.addCommand({pattern: '3dtext ?(.*)', fromMe: td, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/text3d?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.png, caption: tdc, contextInfo: { forwardingScore: 49, isForwarded: true }, quoted: message.data})

    }));
