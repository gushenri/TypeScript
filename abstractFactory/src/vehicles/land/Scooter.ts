import ILandVehicle from "./interface/ILandVehicle";

export default class scooter implements ILandVehicle{
    startRoute() :void {
        this.getCargo();
        console.log("Scooter: iniciando entrega...")
    }
    getCargo() :void{
        console.log("Scooter: entrega retirada...")
    }
}