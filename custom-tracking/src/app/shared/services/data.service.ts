import { ITrackingDetails } from './../interfaces/tracking-details.interface';
import { TrackingDetailsService } from './tracking-details.service';
import { httpOptions } from './../helper/http-header.const';
import { TrackingDetails } from './../model/tracking-details.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {

  constructor(public trackingDetailsService: TrackingDetailsService) {  }

  public addScript(trackingDetails: ITrackingDetails) {
    this.addHeaderScript(trackingDetails.head);
    this.addBodyScript(trackingDetails.body);
  }
  private addHeaderScript(headerScript: string): void {
    const target = document.getElementsByTagName('head')[0];
    const newScript = document.createElement('script');
    const inlineScript = document.createTextNode(headerScript);
    newScript.appendChild(inlineScript);
    target.appendChild(newScript);
  }
  private addBodyScript(bodyScript: string): void {
    const target = document.getElementsByTagName('body')[0];
    const newScript = document.createElement('script');
    const inlineScript = document.createTextNode(bodyScript);
    newScript.appendChild(inlineScript);
    target.appendChild(newScript);
  }
}
