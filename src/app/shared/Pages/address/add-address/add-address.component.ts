import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AddressRequest } from 'src/app/Models/address';
import { AddressService } from 'src/app/Services/address.service';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})
export class AddAddressComponent implements OnInit {
  address:AddressRequest=new AddressRequest();
  isNative:string=""
  disable:boolean=true
  constructor(private service:AddressService, private toastr : ToastrService) { }

  submitAddress(){
    this.service.addAddress(this.address).subscribe({
      next:(response)=>
       {
        this.toastr.success(response.message);
      },
      error:(err)=>{
          this.toastr.error(err.error.message);
      }
      
    })

  }
  ngOnInit(): void {
  }

}
