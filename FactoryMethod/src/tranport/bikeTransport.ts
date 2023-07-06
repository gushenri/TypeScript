import Transport from "./transport";
import IVehicle from "./viacol/Interface/IVehicle";
import Bike from "./viacol/bike";

export default class BikeTransport extends Transport{
    protected createTransport(): IVehicle {
        return new Bike();
    }
}