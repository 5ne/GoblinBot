import { superscript, subscript } from "script-case";

var myEnv;

// setup client
function setup(env) {
    myEnv = env;
    console.log('goblin-bot is ready');
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function gobSpik(gobsTekst) {
    try {
        var reternTekst = '';
        var shudSooperOrSub = 0;
        var prevSooperUrSub = 0;
        for (var i = 0; i < gobsTekst.length; i++) {
            // two out of 3 times, uze preevus case to mak moar reedable
            if (getRandomInt(3)) {
                shudSooperOrSub = prevSooperUrSub;
            } else {
                shudSooperOrSub = getRandomInt(3);
            }

            switch(shudSooperOrSub) {
                case 0:
                    reternTekst = reternTekst + gobsTekst.charAt(i);
                    break;
                case 1:
                    reternTekst = reternTekst + superscript(gobsTekst.charAt(i));
                    break;
                case 2:
                    reternTekst = reternTekst + subscript(gobsTekst.charAt(i));
                    break;
                default:
                    // code block
            }        
            prevSooperUrSub = shudSooperOrSub;
        }
    } catch (err) {
        console.error(err);
        console.error('err spikin gobs');
        return gobsTekst;
    }
    return reternTekst;
}

// handle messages that start with !
async function handleMessage(msg) {
    //console.log('messageCreate');
    if (msg.content.startsWith('!')) {
        if (msg.content.startsWith('!g ')) {
            var gobsTekst = msg.content.split('!g ').pop();
            if (gobsTekst.length > 0) {
                msg.reply(gobSpik(gobsTekst));
            } else {
                msg.reply('aaarfghyueee nuthn to say?');
            }
        } 
    }
}

export { handleMessage, setup };
