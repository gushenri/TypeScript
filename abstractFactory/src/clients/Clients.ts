import IAircraft from "../vehicles/aerial/interface/IAircraft";
import ITransporFactory from "../transports/interface/ITransportFactory";
import ILandVehicle from "../vehicles/land/interface/ILandVehicle";

export default class Client{
    private vehicle : ILandVehicle;
    private aircraft : IAircraft;

    constructor(factory: ITransporFactory){

        this.vehicle = factory.createTransportVehicle();
        this.aircraft = factory.createTransportAircraft();
   
    }

    startRoute() : void{
        this.vehicle.startRoute();
        this.aircraft.startRoute();
    }
}
