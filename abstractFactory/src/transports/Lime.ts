import Drone from "../vehicles/aerial/Drone";
import IAircraft from "../vehicles/aerial/interface/IAircraft";
import scooter from "../vehicles/land/Scooter";
import ILandVehicle from "../vehicles/land/interface/ILandVehicle";
import Company from "./consts/Company";
import ITransportFactory from "./interface/ITransportFactory";

export default class Lime implements ITransportFactory{
    //criar drone e scooter
    createTransportAircraft(): IAircraft {
        return new Drone();
    }
    createTransportVehicle(): ILandVehicle {
        return new scooter();
    }
    getTransportName(): String {
        return Company.LIME;
    }
    
}


