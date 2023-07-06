import IVehicle from "./Interface/IVehicle";

export default class MotorCycle implements IVehicle{
    startRoute() :void{
        this.getCargo();
        console.log("Moto: iniciando a entrega...");

    }
    getCargo(): void{
        console.log("Moto Entrega Finalizada...");
    }
}