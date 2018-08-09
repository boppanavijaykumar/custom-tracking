import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { TrackingDetailsService } from '../shared/services/tracking-details.service';
import { ITrackingDetails } from '../shared/interfaces/tracking-details.interface';
import { Router, ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-custom-tracking-ui',
  templateUrl: './custom-tracking-ui.component.html',
  styleUrls: ['./custom-tracking-ui.component.css']
})
export class CustomTrackingUiComponent implements OnInit {
  public trackingDetailsForm: FormGroup;
  submitted: boolean;
  trackingDetails = {} as ITrackingDetails;
  orgId: number;
  head: string;
  body: string;
  eventRegistration: string;

  getTrackingDetails(orgId: number) {
    this.trackingDetailsService.getTrackingDetails(orgId).subscribe(result => {
      this.trackingDetails = result;
    });
  }

  constructor(private trackingDetailsService: TrackingDetailsService, public formBuilder: FormBuilder, private router: Router
  , private route: ActivatedRoute) {
    this.trackingDetailsForm = this.formBuilder.group({
      orgId: this.formBuilder.control('', []),
      head: this.formBuilder.control('', []),
      body: this.formBuilder.control('', []),
      eventRegistration: this.formBuilder.control('', [])
    });
  }

  ngOnInit() {
    // this.route.params.subscribe(params => {
    //   this.orgId = params['orgId'];
    //   this.orgId = Number(this.orgId);
    this.trackingDetailsService.getTrackingDetails(this.orgId)
    .subscribe( result => {
      console.log(result);
      this.head = result.head;
      this.body = result.body;
      this.eventRegistration = result.eventRegistration;
    }, error => {
      console.log(error);
    });
  }

  public submit() {
    this.submitted = true;
    const trackingDetails = <ITrackingDetails>(
      Object.assign({}, this.trackingDetailsForm.getRawValue())
    );
    console.log(event);
    if (this.trackingDetailsForm.valid) {
      this.trackingDetailsService.addTrackingDetails(trackingDetails).subscribe(
        result => {
          this.router.navigate(['/registration/' + this.orgId]);
        },
        error => {
          console.log(error);
        }
      );
    } else {
      console.log(this.trackingDetailsForm.errors);
    }
  }
}
