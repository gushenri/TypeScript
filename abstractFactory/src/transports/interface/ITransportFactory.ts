import IAircraft from "../../vehicles/aerial/interface/IAircraft";
import ILandVehicle from "../../vehicles/land/interface/ILandVehicle";
export default interface ITransporFactory{
    createTransportVehicle(): ILandVehicle;
    createTransportAircraft() : IAircraft;
}