import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const pp = imgAll;
    // let vn = './media/menu.mp3'
    const img = './Menu2.jpg';
    const d = new Date(new Date + 3600000);
    const locale = 'es-ES';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: '2-digit', month: '2-digit', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const rtotal = Object.entries(global.db.data.users).length || '0'
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];

 await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key } })


const document = doc[Math.floor(Math.random() * doc.length)];
 const str = `
 ╭─────────────────···•⊰ ⋆
│👋🏻 Hola ${taguser}
│soy ✖️NaufraZapp-MD✖️
│•────────────────···•⊰
│Fecha: ${date}
│Tiempo activo: ${uptime}
╰─────────────────···•⊰ ⋆

• https://youtube.com/@user-bw5wl4ye8r?si=qN8bP4ZdKm3yXwbx

• https://whatsapp.com/channel/0029VaRibRvDuMRj6ozMSN1l
${readMore}
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
╭• •꒰─•⭐·𝙀𝘾𝙊𝙉𝙊𝙈𝙄𝘼 : 𝙍𝙋𝙂۬⭐ٜ･
│•┐ _${usedPrefix}cofre_
┃•│ _${usedPrefix}levelup_
┃•│ _${usedPrefix}robar_
┃•│ _${usedPrefix}unreg_
┃•│ _${usedPrefix}reg_
┃•│ _${usedPrefix}minar_
┃•│ _${usedPrefix}minar2_
┃•│ _${usedPrefix}minar3_
┃•┘ _${usedPrefix}work_
╰• •───• •───• •───•

┍━━━━━━━━━━━━━━━━━━━•𖥔 ࣪˖
│•꒰─•🗒️·𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝘾𝙄𝙊𝙉ٜ۬🗒️･
┕━━━━━━━━━━━━━━━━━━━•𖥔 ࣪˖
┌• ${usedPrefix}estado
└•⌕ *ver estado del bot*
┌• ${usedPrefix}nzgrupos
└•⌕ *ver grupos oficiales*
┌• ${usedPrefix}tipobot
└•⌕ *información del bot*
┌• ${usedPrefix}on / off
└•⌕ *muestra las funciones.*
┌• ${usedPrefix}perfil
└•⌕ *información de tu perfil*

┍━━━━━━━━━━━━━━━━━━━•𖥔 ࣪˖
│•꒰─•🤖·𝙎𝙀𝙍𝘽𝙊𝙏 : 𝙉𝙕ٜ۬🤖･
┕━━━━━━━━━━━━━━━━━━━•𖥔 ࣪˖
┌• ${usedPrefix}serbot
└•⌕ *Registra con código de 8 dígitos*
┌• ${usedPrefix}borrarsesion_
└•⌕ *borra todos los sub bots*
┌• ${usedPrefix}stop
└•⌕ *apagar mi sub bot*
┌• ${usedPrefix}bcbots
└•⌕ *mensaje para todos los subbots*
┌• ${usedPrefix}ds_
└•⌕ *Registra con código de 8 dígitos*
┌• ${usedPrefix}bots
└•⌕ *ver sub bots*
╰• •───• •───• •───•

┍━━━━━━━━━━━━━━━━━━━•𖥔 ࣪˖
│.      •꒰─•🎰·𝙅𝙐𝙀𝙂𝙊𝙎ٜ۬🎰･
┕━━━━━━━━━━━━━━━━━━━•𖥔 ࣪˖
┌• ${usedPrefix}acertijo
└•⌕ *Acertijo.*
┌• ${usedPrefix}tictactoe
└•⌕ *Tictactoe*
┌• ${usedPrefix}delttt
└•⌕ *delttt*

┍━━━━━━━━━━━━━━━━━━━•𖥔 ࣪˖
│.      •꒰─•🌎·𝙈𝙀𝙉𝙐𝙎ٜ۬🌎･
┕━━━━━━━━━━━━━━━━━━━•𖥔 ࣪˖
┌• ${usedPrefix}menu
└•⌕ *Menu principal*
┌• ${usedPrefix}menu18
└•⌕ *Menu para adultos*
┌• ${usedPrefix}menuaudios
└•⌕ *menu audios*

┍━━━━━━━━━━━━━━━━━━━•𖥔 ࣪˖
│•꒰─•🧰·𝙃𝙀𝙍𝙍𝘼𝙈𝙄𝙀𝙉𝙏𝘼𝙎ٜ۬🧰･
┕━━━━━━━━━━━━━━━━━━━•𖥔 ࣪˖
┌• ${usedPrefix}chatgpt
└•⌕ *texto*
┌• ${usedPrefix}chatgptvoz
└•⌕ *texto*
┌• ${usedPrefix}delchatgpt
└•⌕ *elimina sesión gpt*
┌• ${usedPrefix}hd
└•⌕ *imagen*
┌• ${usedPrefix}traducir
└•⌕ *mensaje traducido*
┌• ${usedPrefix}toimg
└•⌕ *Responde a sticker.*
┌• ${usedPrefix}tourl
└•⌕ *Guardar sticker.*
┌• ${usedPrefix}sticker
└•⌕ *Imagen o video*

┍━━━━━━━━━━━━━━━━━━━•𖥔 ࣪˖
│「⬇️ִֶָ 𖥔 ࣪˖𝑫𝒆𝒔𝒄𝒂𝒓𝒈𝒂𝒔ִֶָ 𖥔 ࣪˖⬇️」
┕━━━━━━━━━━━━━━━━━━━•𖥔 ࣪˖
┌• ${usedPrefix}fb
└•⌕ *enlace*
┌• ${usedPrefix}apk
└•⌕ *nombre*
┌• ${usedPrefix}mediafire
└•⌕ *enlace*
┌• ${usedPrefix}ig
└•⌕ *enlace*
┌• ${usedPrefix}tiktok
└•⌕ *enlace*
┌• ${usedPrefix}twitter
└•⌕ *enlace*
┌• ${usedPrefix}pinterest
└•⌕ *texto*
┌• ${usedPrefix}mega
└•⌕ *enlace*
┌• ${usedPrefix}gitclone
└•⌕ *enlace*
┌• ${usedPrefix}playdoc2
└•⌕ *enlace • texto*
┌• ${usedPrefix}playdoc
└•⌕ *enlace • texto*
┌• ${usedPrefix}quemusica
└•⌕ *enlace • texto*
┌• ${usedPrefix}play
└•⌕ *enlace • texto*
┌• ${usedPrefix}play2
└•⌕ *enlace • texto*
┌• ${usedPrefix}dlav
└•⌕ *enlace • texto*

┍━━━━━━━━━━━━━━━━━━━•𖥔 ࣪˖
│•꒰─•👥·𝙋𝘼𝙍𝘼 𝙂𝙍𝙐𝙋𝙊𝙎ٜ۬👥･
┕━━━━━━━━━━━━━━━━━━━•𖥔 ࣪˖
┌• ${usedPrefix}admins
└•⌕ *llamar a los admins*
┌• ${usedPrefix}add
└•⌕ *numero +54xxxxxxx*
┌• ${usedPrefix}grupo
└•⌕ *abrir : cerrar*
┌• ${usedPrefix}demote
└•⌕ *quitar admin*
┌• ${usedPrefix}promote
└•⌕ *dar admin*
┌• ${usedPrefix}ban
└•⌕ *@tag*
┌• ${usedPrefix}link
└•⌕ *mostrar enlace*
┌• ${usedPrefix}resetlink
└•⌕ *cambiar link grupal*
┌• ${usedPrefix}tagall
└•⌕ *mensionar a todos*
┌• ${usedPrefix}fantasmas
└•⌕ *ver inactivos*
┌• ${usedPrefix}kickfantasmas
└•⌕ *eliminar inactivos*
┌• ${usedPrefix}hidetag
└•⌕ *mensionar con mensaje*
┌• ${usedPrefix}setwelcome
└•⌕ *texto*
┌• ${usedPrefix}setbye
└•⌕ *texto*
┌• ${usedPrefix}setdesc
└•⌕ *texto*
┌• ${usedPrefix}setfoto
└•⌕ *img*
┌• ${usedPrefix}setname
└•⌕ *texto*
┌• ${usedPrefix}grupoid
└•⌕ *id del grupo*
┌• ${usedPrefix}infogrupo
└•⌕ *información del grupo*
╰• •───• •───• •───•

┍━━━━━━━━━━━━━━━━━━━•𖥔 ࣪˖
│•꒰─•👑·𝙋𝙍𝙊𝙋𝙄𝙀𝙏𝘼𝙍𝙄𝙊۬👑ٜ･
┕━━━━━━━━━━━━━━━━━━━•𖥔 ࣪˖
┌• ${usedPrefix}backup
└•⌕ *backup dol bot.*
┌• ${usedPrefix}update
└•⌕ *Actualizar bot.*
┌• ${usedPrefix}reporte
└•⌕ *reportar comando*
┌• ${usedPrefix}unbanuser
└•⌕ *Desbanear el usuario.*
┌• ${usedPrefix}banuser
└•⌕ *Banear el usuario.*
┌• ${usedPrefix}banchat
└•⌕ *Banear el chat.*
┌• ${usedPrefix}unbanchat
└•⌕ *Desbanear el chat.*
 `.trim();     if (m.isGroup) { 

      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
    } else {

      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, 'Menu erroneo, intentalo de nuevo.', m);
  }
};
handler.command = /^(menuall|menucompleto|allmenu)$/i;
handler.register = true
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}

/*let handler = async (m, { conn, command, usedPrefix }) => {
let pp = imagenRB
let name = await conn.getName(m.sender)
let _uptime = process.uptime() * 1000
let _muptime
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let { money, joincount } = global.db.data.users[m.sender]
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
if (process.send) { process.send('uptime')
_muptime = await new Promise(resolve => { process.once('message', resolve) 
setTimeout(resolve, 1000) }) * 1000}
let uptime = clockString(_uptime)
const more = String.fromCharCode(8206);
const readMore = more.repeat(850);
let naufrago = `╭─────────────────···•⊰ ⋆
│👋🏻 Hola ${taguser}
│soy ✖️NaufraZapp-MD✖️
│•────────────────···•⊰
│Fecha: ${date}
│Tiempo activo: ${uptime}
╰─────────────────···•⊰ ⋆

• https://youtube.com/@user-bw5wl4ye8r?si=qN8bP4ZdKm3yXwbx

• https://whatsapp.com/channel/0029VaRibRvDuMRj6ozMSN1l
╭•┈┈┈┈┈┈• ─ ─ ─ ─ ─ • ┄ •
│• 🗿 \`𝗥𝗘𝗖𝗨𝗥𝗦𝗢𝗦\` 🗿 •
│
│•╮💎 ᴅɪᴀᴍᴀɴᴛᴇs : *${limit}*
│•┊🪙 ɴᴀᴜғʀᴀᴄᴏɪɴs : *${money}*
│•┊⚡ ᴇxᴘ : *${exp}*
│•┊👑 ʀᴀɴɢᴏ : *${role}*
│•╯👤 ɴɪᴠᴇʟ : *${level}*
╰•┈┈┈┈┈┈• ─ ─ ─ ─ ─ • ┄ •

╭• •꒰─•⭐·𝙀𝘾𝙊𝙉𝙊𝙈𝙄𝘼 : 𝙍𝙋𝙂۬⭐ٜ･
│•┐ _${usedPrefix}cofre_
┃•│ _${usedPrefix}levelup_
┃•│ _${usedPrefix}robar_
┃•│ _${usedPrefix}unreg_
┃•│ _${usedPrefix}reg_
┃•│ _${usedPrefix}minar_
┃•│ _${usedPrefix}minar2_
┃•│ _${usedPrefix}minar3_
┃•┘ _${usedPrefix}work_
╰• •───• •───• •───•

┍━━━━━━━━━━━━━━━━━━━•𖥔 ࣪˖
│•꒰─•🗒️·𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝘾𝙄𝙊𝙉ٜ۬🗒️･
┕━━━━━━━━━━━━━━━━━━━•𖥔 ࣪˖
┌• ${usedPrefix}estado
└•⌕ *ver estado del bot*
┌• ${usedPrefix}nzgrupos
└•⌕ *ver grupos oficiales*
┌• ${usedPrefix}tipobot
└•⌕ *información del bot*
┌• ${usedPrefix}on / off
└•⌕ *muestra las funciones.*
┌• ${usedPrefix}perfil
└•⌕ *información de tu perfil*

┍━━━━━━━━━━━━━━━━━━━•𖥔 ࣪˖
│•꒰─•🤖·𝙎𝙀𝙍𝘽𝙊𝙏 : 𝙉𝙕ٜ۬🤖･
┕━━━━━━━━━━━━━━━━━━━•𖥔 ࣪˖
┌• ${usedPrefix}serbot
└•⌕ *Registra con código de 8 dígitos*
┌• ${usedPrefix}borrarsesion_
└•⌕ *borra todos los sub bots*
┌• ${usedPrefix}stop
└•⌕ *apagar mi sub bot*
┌• ${usedPrefix}bcbots
└•⌕ *mensaje para todos los subbots*
┌• ${usedPrefix}ds_
└•⌕ *Registra con código de 8 dígitos*
┌• ${usedPrefix}bots
└•⌕ *ver sub bots*
╰• •───• •───• •───•

┍━━━━━━━━━━━━━━━━━━━•𖥔 ࣪˖
│.      •꒰─•🎰·𝙅𝙐𝙀𝙂𝙊𝙎ٜ۬🎰･
┕━━━━━━━━━━━━━━━━━━━•𖥔 ࣪˖
┌• ${usedPrefix}acertijo
└•⌕ *Acertijo.*
┌• ${usedPrefix}tictactoe
└•⌕ *Tictactoe*
┌• ${usedPrefix}delttt
└•⌕ *delttt*

┍━━━━━━━━━━━━━━━━━━━•𖥔 ࣪˖
│.      •꒰─•🌎·𝙈𝙀𝙉𝙐𝙎ٜ۬🌎･
┕━━━━━━━━━━━━━━━━━━━•𖥔 ࣪˖
┌• ${usedPrefix}menu
└•⌕ *Menu principal*
┌• ${usedPrefix}menu18
└•⌕ *Menu para adultos*
┌• ${usedPrefix}menuaudios
└•⌕ *menu audios*

┍━━━━━━━━━━━━━━━━━━━•𖥔 ࣪˖
│•꒰─•🧰·𝙃𝙀𝙍𝙍𝘼𝙈𝙄𝙀𝙉𝙏𝘼𝙎ٜ۬🧰･
┕━━━━━━━━━━━━━━━━━━━•𖥔 ࣪˖
┌• ${usedPrefix}chatgpt
└•⌕ *texto*
┌• ${usedPrefix}chatgptvoz
└•⌕ *texto*
┌• ${usedPrefix}delchatgpt
└•⌕ *elimina sesión gpt*
┌• ${usedPrefix}hd
└•⌕ *imagen*
┌• ${usedPrefix}traducir
└•⌕ *mensaje traducido*
┌• ${usedPrefix}toimg
└•⌕ *Responde a sticker.*
┌• ${usedPrefix}tourl
└•⌕ *Guardar sticker.*
┌• ${usedPrefix}sticker
└•⌕ *Imagen o video*

┍━━━━━━━━━━━━━━━━━━━•𖥔 ࣪˖
│「⬇️ִֶָ 𖥔 ࣪˖𝑫𝒆𝒔𝒄𝒂𝒓𝒈𝒂𝒔ִֶָ 𖥔 ࣪˖⬇️」
┕━━━━━━━━━━━━━━━━━━━•𖥔 ࣪˖
┌• ${usedPrefix}fb
└•⌕ *enlace*
┌• ${usedPrefix}apk
└•⌕ *nombre*
┌• ${usedPrefix}mediafire
└•⌕ *enlace*
┌• ${usedPrefix}ig
└•⌕ *enlace*
┌• ${usedPrefix}tiktok
└•⌕ *enlace*
┌• ${usedPrefix}twitter
└•⌕ *enlace*
┌• ${usedPrefix}pinterest
└•⌕ *texto*
┌• ${usedPrefix}mega
└•⌕ *enlace*
┌• ${usedPrefix}gitclone
└•⌕ *enlace*
┌• ${usedPrefix}playdoc2
└•⌕ *enlace • texto*
┌• ${usedPrefix}playdoc
└•⌕ *enlace • texto*
┌• ${usedPrefix}quemusica
└•⌕ *enlace • texto*
┌• ${usedPrefix}play
└•⌕ *enlace • texto*
┌• ${usedPrefix}play2
└•⌕ *enlace • texto*
┌• ${usedPrefix}dlav
└•⌕ *enlace • texto*

┍━━━━━━━━━━━━━━━━━━━•𖥔 ࣪˖
│•꒰─•👥·𝙋𝘼𝙍𝘼 𝙂𝙍𝙐𝙋𝙊𝙎ٜ۬👥･
┕━━━━━━━━━━━━━━━━━━━•𖥔 ࣪˖
┌• ${usedPrefix}admins
└•⌕ *llamar a los admins*
┌• ${usedPrefix}add
└•⌕ *numero +54xxxxxxx*
┌• ${usedPrefix}grupo
└•⌕ *abrir : cerrar*
┌• ${usedPrefix}demote
└•⌕ *quitar admin*
┌• ${usedPrefix}promote
└•⌕ *dar admin*
┌• ${usedPrefix}ban
└•⌕ *@tag*
┌• ${usedPrefix}link
└•⌕ *mostrar enlace*
┌• ${usedPrefix}resetlink
└•⌕ *cambiar link grupal*
┌• ${usedPrefix}tagall
└•⌕ *mensionar a todos*
┌• ${usedPrefix}fantasmas
└•⌕ *ver inactivos*
┌• ${usedPrefix}kickfantasmas
└•⌕ *eliminar inactivos*
┌• ${usedPrefix}hidetag
└•⌕ *mensionar con mensaje*
┌• ${usedPrefix}setwelcome
└•⌕ *texto*
┌• ${usedPrefix}setbye
└•⌕ *texto*
┌• ${usedPrefix}setdesc
└•⌕ *texto*
┌• ${usedPrefix}setfoto
└•⌕ *img*
┌• ${usedPrefix}setname
└•⌕ *texto*
┌• ${usedPrefix}grupoid
└•⌕ *id del grupo*
┌• ${usedPrefix}infogrupo
└•⌕ *información del grupo*
╰• •───• •───• •───•

┍━━━━━━━━━━━━━━━━━━━•𖥔 ࣪˖
│•꒰─•👑·𝙋𝙍𝙊𝙋𝙄𝙀𝙏𝘼𝙍𝙄𝙊۬👑ٜ･
┕━━━━━━━━━━━━━━━━━━━•𖥔 ࣪˖
┌• ${usedPrefix}backup
└•⌕ *backup dol bot.*
┌• ${usedPrefix}update
└•⌕ *Actualizar bot.*
┌• ${usedPrefix}reporte
└•⌕ *reportar comando*
┌• ${usedPrefix}unbanuser
└•⌕ *Desbanear el usuario.*
┌• ${usedPrefix}banuser
└•⌕ *Banear el usuario.*
┌• ${usedPrefix}banchat
└•⌕ *Banear el chat.*
┌• ${usedPrefix}unbanchat
└•⌕ *Desbanear el chat.*`
await conn.sendButton(m.chat, naufrago, wm, pp, [
['𝙁𝙐𝙉𝘾𝙄𝙊𝙉𝙀𝙎 🔜', '.on'],
['𝗠𝗘𝗡𝗨 𝗔𝗨𝗗𝗜𝗢𝗦 🔜', '/menuaudios'], null, [
['Canal', `${canal}`]], m)
}
handler.help = ['estado']
handler.tags = ['main']
handler.command = /^(menutodo|menucompleto|allmenu)$/i
handler.register = true
export default handler

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
 */

