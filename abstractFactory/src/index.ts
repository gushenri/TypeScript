import Client from "./clients/Clients";
import Company from "./transports/consts/Company"
import ITransportFactory from "./transports/interface/ITransportFactory"
import Lime from "./transports/Lime";
import NineNineTransport from "./transports/NineNineTransport";
import UberTransport from "./transports/UberTransport";

const currentCompany = Company.UBER;
let factory! : ITransportFactory;
switch(currentCompany){
    case Company.UBER : 
        factory = new UberTransport();
        break;
    case Company.NINENINE : 
        factory = new NineNineTransport();
        break;
    case Company.LIME : 
        factory = new Lime();
        break;
    default : 
        console.error("Companhia não definida!");
}
const client = new Client(factory);
client.startRoute();
