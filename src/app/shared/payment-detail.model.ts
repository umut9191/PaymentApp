export class PaymentDetail {
    constructor(
        public paymentDetailId:number=0,
        public cardOwnerName:string="",
        public cardNumber:string="",
        public expirationDate:string="",
        public securityCode:string=""
    ) {}
}
