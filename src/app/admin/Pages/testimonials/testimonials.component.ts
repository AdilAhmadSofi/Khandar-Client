import { HttpStatusCode } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TestimonialResponse, UpdateTestimonialStatusRequest } from 'src/app/Models/testimonial';
import { GenericService } from 'src/app/Services/generic.service';
import { SharedService } from 'src/app/Services/shared.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {

  imageBasePath=environment.baseUrl;
  testimonials:TestimonialResponse[]=[];
  updateTestimonialStatusRequest:UpdateTestimonialStatusRequest=new UpdateTestimonialStatusRequest();
  constructor(private service:GenericService, private sharedService:SharedService
    ,private taostr : ToastrService) { }

  ngOnInit(): void {
    this.getAllTestimonials();
  }
  getAllTestimonials() {
    this.service
      .Fetch<TestimonialResponse[]>(
        'testimonial/all'
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
               this.taostr.success(response.message);
              this.getAllTestimonials();
            },
            (errRes) => {
              if (
                errRes.error.statusCode === HttpStatusCode.NotFound ||
                errRes.error.statusCode === HttpStatusCode.BadRequest ||
                errRes.error.statusCode === HttpStatusCode.InternalServerError
              )
               this.taostr.error(errRes.error.message);
            }
          );
        }
      });
  }

  updateStatus(id:string,status:any){
    this.updateTestimonialStatusRequest.id=id;
    this.updateTestimonialStatusRequest.status=status
    console.log(this.updateTestimonialStatusRequest)

    environment
      .fireConfirmSwal('Are you sure You Want to active this Testimonial?')
      .then((result) => {
        if (result.isConfirmed) {
          this.service.Update<UpdateTestimonialStatusRequest,string>(
             this.updateTestimonialStatusRequest,'testimonial/status-changes'
          ) .subscribe({
            next: (response) => {
              this.taostr.success(response.message);
              this.getAllTestimonials();
            },
          });
        }
      });
  }
}
