import { TrackingDetailsService } from './../shared/services/tracking-details.service';
import { ActivatedRoute } from '@angular/router';
import { ITrackingDetails } from './../shared/interfaces/tracking-details.interface';
import { DataService } from './../shared/services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tournament-team-signup',
  templateUrl: './tournament-team-signup.component.html',
  styleUrls: ['./tournament-team-signup.component.css']
})
export class TournamentTeamSignupComponent implements OnInit {
  trackingDetails = {} as ITrackingDetails;
  orgId: number;
  head: string;
  body: string;
  getTrackingDetails(orgId: number) {
    this.trackingDetailsService.getTrackingDetails(orgId).subscribe(result => {
      this.trackingDetails = result;
      console.log(result);
      this.dataservice.addScript(result);
    });
  }
  constructor(public dataservice: DataService,
    public route: ActivatedRoute,
    public trackingDetailsService: TrackingDetailsService) {
    this.route.params.subscribe(params => {
      this.orgId = params['orgId'];
      this.orgId = Number(this.orgId);
    });
  }

  ngOnInit() {
    this.getTrackingDetails(this.orgId);
  }

}
