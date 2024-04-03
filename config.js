

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath, pathToFileURL } from 'url'

global.owner = [
['524531287294', '𝗧𝗛𝗘-𝗢𝗦𝗩𝗔𝗟𝗗𝗢-𝗕𝗢𝗧', true], 
['5492266466080', 'Owner 🍧', true], 
['5217294888993'], 
['00'], 
['5214531287294'], 
['5492964650915'], 
['573013482814'], 
['5492266613038'], 
['5215610314499'], 
['51902247905'], 
['51935531943']]

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
//Sólo aplica para opción 2 (ser bot con código de texto de 8 digitos)
global.botNumberCode = '' //Ejemplo: +59309090909
global.confirmCode = ''

global.suittag = ['5214531287294']
global.mods = []
global.prems = []

//Aqui encuentras los nombres del bot
global.packname = ''
global.author = '𝘖𝘴𝘷𝘢𝘭𝘥𝘰𝘉𝘰𝘵'
global.wm = '© 𝘖𝘴𝘷𝘢𝘭𝘥𝘰𝘉𝘰𝘵-MD'
global.wm2 = '𝘖𝘴𝘷𝘢𝘭𝘥𝘰 : Bot'
global.azami = '𝘖𝘴𝘷𝘢𝘭𝘥𝘰'
global.cb = '𝘖𝘴𝘷𝘢𝘭𝘥𝘰𝘉𝘰𝘵'

//Aqui la versión y entre otros
global.vs = 'V2'
global.library = 'Baileys'
global.baileys = '@whiskeysockets/baileys'
global.lenguaje = 'Español'
global.menudi = ['⛶','❏','⫹⫺']
global.dev = 'lonely'
global.devnum = '+591 62714296'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => { unwatchFile(file)
console.log(chalk.yellow('Se actualizo el archivo config.js'))
import(`${file}?update=${Date.now()}`)
})
