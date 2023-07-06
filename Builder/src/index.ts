import VehicleBuilder from "./builders/VehicleBuider";
import Directors from "./directors/Directors";
import Vehicle from "./products/Vehicle";

const builder : VehicleBuilder = new VehicleBuilder();
const director : Directors = new Directors(builder);

director.constructSedanCar();
const sedan : Vehicle = builder.getVehicle();

director.constructTruck();
const truck : Vehicle = builder.getVehicle();

imprimirDetalhes(sedan);
imprimirDetalhes(truck);

function imprimirDetalhes(vehicle :Vehicle){
    console.log("Construindo veiculo: " + vehicle.vehicleType);
    console.log("Potência: " + vehicle.engine.power);
    console.log("Transmissão: "+vehicle.transmission);
    console.log("Assentos: "+vehicle.seats);
    console.log("Rodas: "+vehicle.wheels.length + " Aro: "+vehicle.wheels[0].rim);
    console.log("-----------------------------------------------------------------")
}