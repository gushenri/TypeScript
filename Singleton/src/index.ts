import IPaymentBtg from "./btg/IPaymentBtg";
import PayBtg from "./btg/PayBtg";
import IPaymentNu from "./nubank /IPaymentNu";
import PayNuBank from "./nubank /PayNuBank";

const nuBank : IPaymentNu = new PayNuBank();

nuBank.contas();

const btg : IPaymentBtg = new PayBtg();

btg.contas();