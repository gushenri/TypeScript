import IVehicle from "./Interface/IVehicle";

export default class Car implements IVehicle{
    startRoute() :void{
        this.getCargo();
        console.log("Carro: iniciando a rota...");

    }
    getCargo(): void{
        console.log("Viagem finalizada...");
    }

}