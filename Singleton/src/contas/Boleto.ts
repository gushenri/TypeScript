export default class Boleto  {
    private static instance: Boleto;
    private pago = false;
  
    private constructor() {
      if (Boleto.instance) {
        throw new Error("Nova instância não pode ser criada!!");
      }
  
      Boleto.instance = this;
    }
  
    public static getInstance(): Boleto {
      if (!Boleto.instance) {
        Boleto.instance = new Boleto();
      }
      return Boleto.instance;
    }
  
    public pagar(): void {
      if (!this.pago) {
        console.log("Boleto Pago!!!");
        this.pago = true;
      } else {
        console.log("Esse boleto já foi pago.");
      }
    }
  }
  