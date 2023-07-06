import Transport from "./transport";
import Car  from "./viacol/car";
import IVehicle from "./viacol/Interface/IVehicle";

export default class CartTransport extends Transport{
    protected createTransport(): IVehicle {
        return new Car();
    }
}