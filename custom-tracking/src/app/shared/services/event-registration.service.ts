import { ITrackingDetails } from './../interfaces/tracking-details.interface';
import { TrackingDetailsService } from './tracking-details.service';
import { Injectable } from '@angular/core';

@Injectable()
export class EventRegistrationService {
  constructor(public trackingDetailsService: TrackingDetailsService) {}

  public addScript(trackingDetails: ITrackingDetails) {
    this.addEventRegistrationScript(trackingDetails.eventRegistration);
  }
  private parseHTML(html) {
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content.cloneNode(true);
  }

  private addEventRegistrationScript(eventRegistrationScript: string): void {
    const regExp = RegExp('<script>');
    let newScript;
    if (regExp.test(eventRegistrationScript)) {
      const target = document.getElementsByTagName('body')[0];
      const inlineScript = this.parseHTML(eventRegistrationScript);
      target.appendChild(inlineScript);
    } else {
      const target = document.getElementsByTagName('body')[0];
      newScript = document.createElement('script');
      const inlineScript = document.createTextNode(eventRegistrationScript);
      newScript.appendChild(inlineScript);
      target.appendChild(newScript);
    }
  }
}
