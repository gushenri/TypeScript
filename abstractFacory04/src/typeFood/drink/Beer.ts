import IDrink from "./interface/IDrink";

export default class Beer implements IDrink{
    orderDelivered() :void{
        this.orderAccept();
        this.preparingOrder();
        this.startRote();
        console.log("Beer: Pedido Entregue");

    }
    orderAccept() {
        console.log("Beer: Pedido aceito");
    }

    preparingOrder() {
        console.log("Beer: Pedido sendo preparado");
    }

    startRote() {
        console.log("Beer: Pedido saiu para entrega");
    }
}