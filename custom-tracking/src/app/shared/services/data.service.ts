import { TrackingDetailsService } from './tracking-details.service';
import { httpOptions } from './../helper/http-header.const';
import { TrackingDetails } from './../model/tracking-details.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {
  constructor(public trackingDetailsService: TrackingDetailsService) {
    const target = document.getElementsByTagName('head')[0];
    const newScript = document.createElement('script');
    const inlineScript = document.createTextNode('alert(\'Hello World!\');');
    newScript.appendChild(inlineScript);
    target.appendChild(newScript);
  }
}
