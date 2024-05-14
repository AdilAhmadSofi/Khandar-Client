import { Component, OnInit } from '@angular/core';
import { error } from 'jquery';
import { MemberRequest, MemberResponse } from 'src/app/Models/member';
import { MemberService } from 'src/app/Services/member.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  member:MemberResponse = new MemberResponse();
  constructor(private memberService: MemberService) { }
baseImagePath : string = environment.baseUrl;
  ngOnInit(): void {
    this.memberService.getMemberById().subscribe({
      next:(response)=>{
        console.log(response);
   this.member = response.result;
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }

  updateMember(form:any){
    const formData = new FormData(form);
    this.memberService.updateMember(formData).subscribe({
      next:(response)=>{
        console.log(response);
        if(response.isSuccess) environment.fireSuccessSwal(response.message);
        else environment.fireErrorSwal(response.message)
      },
      error:(error:Error)=>{
       environment.fireErrorSwal(error.message)
      }
    })
  }
  previewImage(img:any,file:any){
    const blob = URL.createObjectURL(file.files[0])
    img.src = blob;
  }
}
