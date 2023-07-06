import AiqFomeDelivery from "./iFoodDelivery/AiqfomeDelivery";
import IfoodDelivery from "./iFoodDelivery/IfoodDelivery";
import Company from "./iFoodDelivery/consts/Company";
import IDeliveryFactory from "./iFoodDelivery/interface/IDeliveryFactory";
import Client from "./client/Client";

 const deliveryCompany = Company.ifood;
 let factory! :IDeliveryFactory;

 switch(deliveryCompany){
    case Company.aiqfome :
        factory = new AiqFomeDelivery();
        break;
    case Company.ifood :
        factory = new IfoodDelivery();
        break;
    default :
        console.log("Delivery não definido")
 }

 const client = new Client(factory);
 client.orderDelivered();