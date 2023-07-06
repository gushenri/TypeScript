import Beer from "../typeFood/drink/Beer";
import Hamburguer from "../typeFood/food/Hamburguer";
import IDeliveryFactory from "./interface/IDeliveryFactory";

export default class AiqFomeDelivery implements IDeliveryFactory{
    createDeliveryDrinnk() {
        return new Beer();
    }

    createDeliveryFood() {
        return new Hamburguer();
    }
}