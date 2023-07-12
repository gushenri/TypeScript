import IPlataForm from "../plataforms/IPlataForm";
import Itransmission from "./Itransmission";

export default class Live implements Itransmission{
    
    constructor (private plataform :IPlataForm){}
    
    broadcasting(): void {
        console.log("Iniciando Transmissão.");
    }
    result(): void {
        console.log("********** NO AR **********");
    }

}