export class AddressRequest {
    state!: string;
    city!: string;
    addressLine!: string;
    landmark!: string;
    pinCode!: string;
    isNative!: boolean;
    module!: number;
    entityId!: string;
}

export class AddressResponse {
    state!: string;
    city!: string;
    addressLine!: string;
    landmark!: string;
    pinCode!: string;
    isNative!: boolean;
    module!: number;
    id!: string;
   
}

