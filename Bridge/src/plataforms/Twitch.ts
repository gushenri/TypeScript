import IPlataForm from "./IPlataForm";

export default class Twitch implements IPlataForm{
    
    constructor(){
        this.configureRMTP();
        console.log("Twitch: plataforma configurada.")
    }
    
    configureRMTP(): void {
        this.authToken();
        console.log("Twitch: configurando Brodcast.")
    }
    authToken(): void {
        console.log("Twitch: autenticando Token")
    }

}