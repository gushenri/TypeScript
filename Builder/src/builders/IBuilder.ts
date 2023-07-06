import Engine from "../components/Engine";
import Transmission from "../components/Transmission";
import VehicleType from "../components/VehicleType";
import Wheel from "../components/Wheel";
import Vehicle from "../products/Vehicle";

export default interface IBuilders{
    reset() : void;
    getVehicle() :Vehicle;
    addWheel(wheel : Wheel) :void;
    setVehicleType(value: VehicleType);
    setSeats(seats : number);
    setEngine(engine :Engine);
    setTransmission(value :Transmission);

}