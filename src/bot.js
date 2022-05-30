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

function superOrSub(superScript, str) {
    if (superScript) {
        return superscript(str);
    }
    return subscript(str);
}

function gobSpik(gobsTekst) {
    try {
        var reternTekst = '';
        var superScript = getRandomInt(2);

        for (var i = 0; i < gobsTekst.length; i++) {
            switch(getRandomInt(2)) {
                case 0:
                    reternTekst = reternTekst + gobsTekst.charAt(i);
                    break;
                case 1:
                    reternTekst = reternTekst + superOrSub(superScript, gobsTekst.charAt(i));
                    break;
                default:
                    // code block
            }        
        }
    } catch (err) {
        console.error(err);
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
                if (myEnv.unknownMsgReplyWithUsage()) {
                    msg.reply('aaarfghyueee nuthn to say?');
                }
            }
        } 
    }
}

export { handleMessage, setup };
