   export class AppOrderRequest 
     {
         appealId?  : string;
         amount?  : number;
    }

    export class AppOrderResponse {
        orderId!: string;
        amount!: number;
        name!: string;
        email!: string;
        contact!: string;
        address!: string;
        description!: string;
      }


    