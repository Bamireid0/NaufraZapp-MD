import fetch from 'node-fetch';

const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw `❮⛔❯ » 𝙇𝙤𝙨 𝙘𝙤𝙢𝙖𝙣𝙙𝙤𝙨 𝙥𝙖𝙧𝙖 𝙖𝙙𝙪𝙡𝙩𝙤𝙨 𝙚𝙨𝙩𝙖𝙣 𝙙𝙚𝙨𝙖𝙘𝙩𝙞𝙫𝙖𝙙𝙤𝙨.`; 
  try {
    const pp = imagen1;
    //const vn = './media/La biblia.mp3';
    const d = new Date(new Date + 3600000);
    const locale = 'es';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `
╭•┈┈┈┈┈┈• ─ ─ ─ ─ ─ • ┄ •
│• 🗿 \`𝗥𝗘𝗖𝗨𝗥𝗦𝗢𝗦\` 🗿 •
│
│•╮💎 ᴅɪᴀᴍᴀɴᴛᴇs : *${limit}*
│•┊🪙 ɴᴀᴜғʀᴀᴄᴏɪɴs : *${money}*
│•┊⚡ ᴇxᴘ : *${exp}*
│•┊👑 ʀᴀɴɢᴏ : *${role}*
│•╯👤 ɴɪᴠᴇʟ : *${level}*
╰•┈┈┈┈┈┈• ─ ─ ─ ─ ─ • ┄ •
${readMore}

╭• •꒰─•🔥·𝙓𝙓𝙓 𝙍𝘼𝙉𝘿𝙊𝙈 🌡️ٜ۬･
│•┐ _${usedPrefix}xxxloli_
┃•│ _${usedPrefix}xxxfoot_
┃•│ _${usedPrefix}xxxass_ 
┃•│ _${usedPrefix}xxxbdsm_
┃•│ _${usedPrefix}xxxcum_
┃•│ _${usedPrefix}xxxero_
┃•│ _${usedPrefix}xxxfemdom_
┃•│ _${usedPrefix}xxxglass_
┃•│ _${usedPrefix}xxxhentai_
┃•│ _${usedPrefix}xxxorgy_
┃•│ _${usedPrefix}xxxtetas_
┃•│ _${usedPrefix}xxxbooty_
┃•│ _${usedPrefix}xxxecchi_
┃•│ _${usedPrefix}xxxfurro_
┃•│ _${usedPrefix}xxxpanties_
┃•│ _${usedPrefix}xxxpene_
┃•│ _${usedPrefix}xxxporno_
┃•│ _${usedPrefix}xxxrandom_
┃•│ _${usedPrefix}xxxpechos_
┃•│ _${usedPrefix}xxxyuri_
┃•│ _${usedPrefix}xxxyuri2_
│•┘ _${usedPrefix}xxxlesbians_
╰• •───• •───• •───•

╭• •꒰─•🔥·𝘼𝙉𝙄𝙈𝙀 𝘽𝙊𝙔 😏ٜ۬･
│•┐ _${usedPrefix}asuma_
┃•│ _${usedPrefix}endeavor_
┃•│ _${usedPrefix}takeda_
┃•│ _${usedPrefix}xxxyaoi_
│•┘ _${usedPrefix}xxxyaoi2_
╰• •───• •───• •───•`.trim();
    if (m.isGroup) {
      await conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
      //await conn.sendFile(m.chat, vn, 'La biblia.mp3', null, m, true, {type: 'audioMessage', ptt: true});
    } else {
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      await conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
      //await conn.sendFile(m.chat, vn, 'La biblia.mp3', null, m, true, {type: 'audioMessage', ptt: true});
    }
  } catch {
    conn.reply(m.chat, `❮❌❯ » 𝙊𝙘𝙪𝙧𝙧𝙞𝙤 𝙪𝙣 𝙚𝙧𝙧𝙤𝙧 𝙞𝙣𝙚𝙨𝙥𝙚𝙧𝙖𝙙𝙤 𝙚𝙣 𝙚𝙡 𝙢𝙚𝙣𝙪 18.`, m);
  }
};
handler.command = /^(menu18|menuhot|menuadultos)$/i;
handler.exp = 50;
handler.fail = null;
handler.register = true
export default handler;

function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
