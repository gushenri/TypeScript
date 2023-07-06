import SoftDrink from "../typeFood/drink/SoftDrink";
import HotDog from "../typeFood/food/HotDog";
import IDeliveryFactory from "./interface/IDeliveryFactory";

export default class IfoodDelivery implements IDeliveryFactory{
    createDeliveryDrinnk() {
        return new SoftDrink();
    }

    createDeliveryFood() {
        return new HotDog();
    }

}