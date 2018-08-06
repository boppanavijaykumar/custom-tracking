import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/services/data.service';
import { TrackingDetailsService } from '../shared/services/tracking-details.service';
import { ITrackingDetails } from '../shared/interfaces/tracking-details.interface';

@Component({
  selector: 'app-custom-tracking-ui',
  templateUrl: './custom-tracking-ui.component.html',
  styleUrls: ['./custom-tracking-ui.component.css']
})

export class CustomTrackingUiComponent implements OnInit {
  public trackingDetailsForm: FormGroup;
  submitted: boolean;

  constructor( private trackingDetailsService: TrackingDetailsService, public formBuilder: FormBuilder) {
    this.trackingDetailsForm = this.formBuilder.group({
      head: this.formBuilder.control('', []),
      body: this.formBuilder.control('', []),
      eventRegistration: this.formBuilder.control('', [])
    });
  }

  ngOnInit() {}

  public submit() {
    this.submitted = true;
    const trackingDetails = <ITrackingDetails>Object.assign({}, this.trackingDetailsForm.getRawValue());
    console.log(event);
    if (this.trackingDetailsForm.valid) {
        this.trackingDetailsService.addTrackingDetails(trackingDetails)
            .subscribe(result => {
                alert('successfully');
            }, (error) => {
                console.log(error);
            });
    } else {
        console.log(this.trackingDetailsForm.errors);
    }
  }
}
