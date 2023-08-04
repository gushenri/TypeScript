import Boleto from "../contas/Boleto";
import IPaymentBtg from "./IPaymentBtg";

export default class PayBtg implements IPaymentBtg{
    private instance1 = Boleto.getInstance();

    contas(): void {
        console.log("BTG: ")
        this.instance1.pagar();
    }

}
