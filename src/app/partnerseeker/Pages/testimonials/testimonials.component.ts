import { HttpStatusCode } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TestimonialResponse } from 'src/app/Models/testimonial';
import { GenericService } from 'src/app/Services/generic.service';
import { SharedService } from 'src/app/Services/shared.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {

  testimonials:TestimonialResponse[]=[]
  constructor(private service:GenericService, private sharedService:SharedService
    ,private toastr : ToastrService) { }

  ngOnInit(): void {
    this.getAllTestimonials();
  }
  getAllTestimonials() {
    this.service
      .Fetch<TestimonialResponse[]>(
        'testimonial/my-testimonials'
      )
      .subscribe({
        next: (response) => {
          console.log(response);

          this.testimonials = response.result;
        },
      });
  }
  deleteTestimonial(id: string) {
    environment
      .fireConfirmSwal('Are you sure You Want to Delete this Testimonial?')
      .then((result) => {
        if (result.isConfirmed) {
          this.sharedService.deleteItem('Testimonial', id).subscribe(
            (response) => {
              if (response.isSuccess)
               this.toastr.success(response.message);
              this.getAllTestimonials();
            },
            (errRes) => {
              if (
                errRes.error.statusCode === HttpStatusCode.NotFound ||
                errRes.error.statusCode === HttpStatusCode.BadRequest ||
                errRes.error.statusCode === HttpStatusCode.InternalServerError
              )
               this.toastr.error(errRes.error.message);
            }
          );
        }
      });
  }
  postTestimonial(desc:string){
    let model={
      description:desc
    }
   this.service.Post(model,"testimonial").subscribe({
    next:(response)=>{
      this.toastr.success(response.message);
      this.getAllTestimonials();
    },
    error:(err)=>{

    }
   })
  }
}
