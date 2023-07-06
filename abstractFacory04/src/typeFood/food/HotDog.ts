import IFood from "./interface/IFood";

export default class HotDog implements IFood{
    orderDelivered() :void{
        this.orderAccept();
        this.preparingOrder();
        this.startRote();
        console.log("HotDog: Pedido Entregue");

    }
    orderAccept() {
        console.log("HotDog: Pedido aceito");
    }

    preparingOrder() {
        console.log("HotDog: Pedido sendo preparado");
    }

    startRote() {
        console.log("HotDog: Pedido saiu para entrega");
    }
}