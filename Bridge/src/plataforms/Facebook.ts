import IPlataForm from "./IPlataForm";

export default class Facebook implements IPlataForm{
    
    constructor(){
        this.configureRMTP();
        console.log("Facebook: plataforma configurada.")
    }
    
    configureRMTP(): void {
        this.authToken();
        console.log("Facebook: configurando Brodcast.")
    }
    authToken(): void {
        console.log("Facebook: autenticando Token")
    }

}