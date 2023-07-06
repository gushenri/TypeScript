import IDrink from "./interface/IDrink";

export default class SoftDrink implements IDrink{
    orderDelivered() :void{
        this.orderAccept();
        this.preparingOrder();
        this.startRote();
        console.log("SoftDrink: Pedido Entregue");

    }
    orderAccept() {
        console.log("SoftDrink: Pedido aceito");
    }

    preparingOrder() {
        console.log("SoftDrink: Pedido sendo preparado");
    }

    startRote() {
        console.log("SoftDrink: Pedido saiu para entrega");
    }
}