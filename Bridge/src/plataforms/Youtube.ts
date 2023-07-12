import IPlataForm from "./IPlataForm";

export default class Youtube implements IPlataForm{
    
    constructor(){
        this.configureRMTP();
        console.log("Youtube: plataforma configurada.")
    }
    
    configureRMTP(): void {
        this.authToken();
        console.log("Youtube: configurando Broadcast");
    }
    authToken(): void {
       console.log("Youtube: autenticando Token");
    }

}