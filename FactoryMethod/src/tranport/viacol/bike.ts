import IVehicle from "./Interface/IVehicle";

export default class Bike implements IVehicle{
    startRoute(): void {
        this.getCargo();
        console.log("Viagem finalizada...");
    }
    getCargo(): void {
        console.log("Biscicleta: iniciando a rota...")
    }
}