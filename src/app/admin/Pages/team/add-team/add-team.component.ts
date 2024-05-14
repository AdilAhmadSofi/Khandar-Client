import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TeamRequest } from 'src/app/Models/team';
import { TeamService } from 'src/app/Services/team.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {
  team = new TeamRequest();
  showLoader = false
  constructor(private teamService: TeamService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  submitTeam() {
    this.showLoader = true;

    this.teamService.addTeam(this.team).subscribe(
      {
        next: (response) => {
          this.toastr.success(response.message)
          this.showLoader = false
        },
        error: (err) => {
          this.toastr.error(err.error.message)
          this.showLoader = false
        },
      }
    )
  }
}

