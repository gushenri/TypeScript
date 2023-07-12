import Facebook from "./plataforms/Facebook";
import IPlataForm from "./plataforms/IPlataForm";
import Twitch from "./plataforms/Twitch";
import Youtube from "./plataforms/Youtube";
import Live from "./trasmission/Live";
import LiveAdvanced from "./trasmission/LiveAdvanced";

function startLive(plataform :IPlataForm){
    console.log("Aguarde...");
    const live = new Live(plataform);
    live.broadcasting();
    live.result();
    console.log("  ")
}

function startAdvancedLive(plataform :IPlataForm){
    console.log("Aguarde...");
    const liveAdvanced = new LiveAdvanced(plataform);
    liveAdvanced.broadcasting();
    liveAdvanced.result();
    liveAdvanced.subtitules();
    liveAdvanced.comments();
    console.log("  ")
}

startLive(new Youtube());
startAdvancedLive(new Facebook());