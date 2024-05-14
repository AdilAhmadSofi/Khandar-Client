import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { AppealSummary } from 'src/app/Models/donationAppeal';
import { DonationAppealService } from 'src/app/Services/donation-appeal.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BarChartComponent implements OnInit {

  appealSummaries  : AppealSummary[] = [];
  constructor(private donationAppealService  : DonationAppealService,private _detector: ChangeDetectorRef) { }

  ngOnInit(): void {
  }


  

  // @ViewChild("legend", { static: true } )
  // private legend: IgxLegendComponent
  // @ViewChild("chart", { static: true } )
  // private chart: IgxCategoryChartComponent

  // private _highestGrossingMovies: HighestGrossingMovies = null;
  // public get highestGrossingMovies(): HighestGrossingMovies {
  //     if (this._highestGrossingMovies == null)
  //     {
  //         this._highestGrossingMovies = new HighestGrossingMovies();
  //     }
  //     return this._highestGrossingMovies;
  // }

  getAppealSummary(){
    this.donationAppealService.getAppealSummary(0).subscribe({
      next: (data) => {
        this.appealSummaries = data.result;
      },
      error:(err)=>{}
    })
  }
}
