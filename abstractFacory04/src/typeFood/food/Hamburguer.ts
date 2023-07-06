import IFood from "./interface/IFood";

export default class Hamburguer implements IFood{
    orderDelivered() :void{
        this.orderAccept();
        this.preparingOrder();
        this.startRote();
        console.log("Hamburguer: Pedido Entregue");

    }
    orderAccept() {
        console.log("Hamburguer: Pedido aceito");
    }

    preparingOrder() {
        console.log("Hamburguer: Pedido sendo preparado");
    }

    startRote() {
        console.log("Hamburguer: Pedido saiu para entrega");
    }
}