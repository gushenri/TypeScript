import PayonnerAdapter from "./adapter/PayonnerAdapter";
import IPayonnerPayment from "./payonner/IPayonnerPayment";
import Payonner from "./payonner/Payonner";
import IPayPalPayment from "./paypal/IPayPalPayment";
import PayPal from "./paypal/PayPal";

const payment : IPayPalPayment = new PayPal();
payment.paypalPayment();
payment.paypalReceive();

const payment2 : IPayonnerPayment = new PayonnerAdapter(new Payonner());
payment2.paypalPayment();
payment2.paypalReceive();
