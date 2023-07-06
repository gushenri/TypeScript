import Helicopter from "../vehicles/aerial/Helicopter";
import IAircraft from "../vehicles/aerial/interface/IAircraft";
import ILandVehicle from "../vehicles/land/interface/ILandVehicle";
import Motorcyle from "../vehicles/land/motorCycle";
import ITransporFactory from "./interface/ITransportFactory";

export default class NineNineTransport implements ITransporFactory{
    createTransportVehicle(): ILandVehicle {
        return new Motorcyle();
    }
    createTransportAircraft(): IAircraft {
       return new Helicopter();
    }
}
