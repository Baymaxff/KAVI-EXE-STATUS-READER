const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "MoRjERLC#V9iSjFGq8--5EpPrR5w2idtRHklUL6dmMz_Bomqjz90",
ALIVE_REACT: process.env.ALIVE_REACT || "👋",
ALIVE_IMG: process.env.ALIVE_IMG || "https://pomf2.lain.la/f/pkuujaup.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "KAVI EXE_V1_Connected ☑️_📂𝙳𝙴𝙿𝙻𝚈 𝙱𝚈 KAVI_EXE📘☀",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "private",
ALWAYS_ONLINE : process.env.ALWAYS_ONLINE || "false",
AUTO_TYPING: process.env.AUTO_TYPING || "false",
 AUTO_RECORDING: process.env.AUTO_RECORDING || "true",   
};
