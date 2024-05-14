import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AddressResponse } from 'src/app/Models/address';
import { AddressService } from 'src/app/Services/address.service';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.css']
})
export class AddressesComponent implements OnInit {
  showLoader=false;
  addresses!:AddressResponse[];
  constructor(private service:AddressService, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.getMyAddresses();
  }

  getMyAddresses(){
    this.service.getMyAddresses().subscribe({
      next:(response)=>{
        if(response.isSuccess){
          this.addresses=response.result;
        }
      },
      error:(err)=>{
          console.log(err.message)
      }
     })
  }


  deleteAddress(id:string){
    console.log(id);
    this.service.deleteAddress(id).subscribe({
      next:(res)=>{
          this.toastr.success(res.message);
          this.getMyAddresses();
      },
      error:(err)=>{
          this.toastr.error(err.error.message);
      }
     } )
    
  }
}
