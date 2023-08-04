import Boleto from "../contas/Boleto";
import IPaymentNu from "./IPaymentNu";

export default class PayNuBank implements IPaymentNu{
    private instance1 = Boleto.getInstance();

    contas(): void {
        console.log("NuBank: ")
        this.instance1.pagar();
    }

}