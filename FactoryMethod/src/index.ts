import BikeTransport from "./tranport/bikeTransport";
import CartTransport from "./tranport/carTransport";
import MotorCycleTransport from "./tranport/motorCyclesTransport";
import Transport from "./tranport/transport";


declare var process;
let transport: Transport;

if(process.argv.includes("uber")){
    transport = new CartTransport();
    transport.startTransport();
}else if(process.argv.includes("eats")){
    transport = new MotorCycleTransport();
    transport.startTransport();
}else if(process.argv.includes("bike")){
    transport = new BikeTransport();
    transport.startTransport();
}else{
    console.log("Tipo de transporte invalido")
}