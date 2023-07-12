import IPlataForm from "../plataforms/IPlataForm";
import Live from "./Live";

export default class LiveAdvanced extends Live{
    constructor (plataform : IPlataForm){
        super(plataform);
    }

    subtitules() :void {
        console.log("CC Ativado...")
    }

    comments() :void {
        console.log("Comentarios Ativados...")
    }
}