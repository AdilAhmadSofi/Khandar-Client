import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TeamResponse } from 'src/app/Models/team';
import { TeamService } from 'src/app/Services/team.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
teams : TeamResponse[]=[];
showLoader = false;
constructor(private teamService: TeamService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getAllTeams();
  }


  getAllTeams() {
    this.showLoader = true;

    this.teamService.getAllTeams().subscribe(
      {
        next: (response) => {
          this.teams = response.result;
          this.showLoader = false;
        },
        error: (err) => {
          this.toastr.error(err.error.message);
          this.showLoader = false;
        },
      }
    )
  }
}
