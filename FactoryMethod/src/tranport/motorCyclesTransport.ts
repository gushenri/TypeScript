import Transport from "./transport";
import IVehicle from "./viacol/Interface/IVehicle";
import MotorCycle from "./viacol/MotorCycle";

export default class MotorCycleTransport extends Transport{
    protected createTransport(): IVehicle {
        return new MotorCycle();
    }
}