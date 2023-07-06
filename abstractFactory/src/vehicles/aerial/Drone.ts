import IAircraft from "./interface/IAircraft";

export default class Drone implements IAircraft{
    startRoute(): void {
        this.checkWind(); //mudar p helice
        this.getCargo();
        console.log("Drone: iniciando decolagem...")
    }

    getCargo(): void {
        console.log("Drone: encomenda plugada...")
    }
    checkWind(): void {
        console.log("Drone: Hélices checadas...")
    }
}