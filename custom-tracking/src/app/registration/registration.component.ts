import { EventRegistrationService } from './../shared/services/event-registration.service';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { EventRegistrationComponent } from './../event-registration/event-registration.component';
import { HttpHeaders } from '@angular/common/http';
import { ITrackingDetails } from './../shared/interfaces/tracking-details.interface';
import { TrackingDetailsService } from './../shared/services/tracking-details.service';
import { DataService } from './../shared/services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  trackingDetails = {} as ITrackingDetails;
  orgId: number;
  head: string;
  body: string;
  eventRegistration: string;
  getTrackingDetails(orgId: number) {
    this.trackingDetailsService.getTrackingDetails(orgId).subscribe(result => {
      this.trackingDetails = result;
      this.dataservice.addScript(result);
      this.eventRegistrationService.addScript(result);
    });
  }

  constructor(public dataservice: DataService, public eventRegistrationService: EventRegistrationService , public route: ActivatedRoute,
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
