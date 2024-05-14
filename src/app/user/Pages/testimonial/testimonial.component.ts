import { Component, OnInit } from '@angular/core';
import { TestimonialResponse } from 'src/app/Models/testimonial';
import { GenericService } from 'src/app/Services/generic.service';
import { SharedService } from 'src/app/Services/shared.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {

  imageBasePath = environment.baseUrl;
  testimonials: TestimonialResponse[] = [];
  index: number = 0;
  constructor(
    private service: GenericService,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this.getAllTestimonials();
  }
  getAllTestimonials() {
    this.service
      .Fetch<TestimonialResponse[]>('testimonial/all-active-testimonials')
      .subscribe({
        next: (response) => {
          console.log(response);
          this.testimonials = response.result;
        },
      });
  }
}

