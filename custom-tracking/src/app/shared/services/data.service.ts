import { ITrackingDetails } from './../interfaces/tracking-details.interface';
import { TrackingDetailsService } from './tracking-details.service';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  param: string;
  constructor(public trackingDetailsService: TrackingDetailsService) {}

  public addScript(trackingDetails: ITrackingDetails) {
    this.scriptAdder(trackingDetails.head, true);
    this.scriptAdder(trackingDetails.body, false);
  }

  private parseHTML(html) {
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content.cloneNode(true);
  }

  public scriptAdder(script: string, isHead: boolean) {

    if (isHead) {
       this.param = 'head';
    } else {
      this.param = 'body';
    }
    const regExp = RegExp('<script>');
      let newScript;
      if (regExp.test(script)) {
        const target = document.getElementsByTagName(this.param)[0];
        const inlineScript = this.parseHTML(script);
        target.appendChild(inlineScript);
      } else {
        const target = document.getElementsByTagName(this.param)[0];
        newScript = document.createElement('script');
        const inlineScript = document.createTextNode(script);
        newScript.appendChild(inlineScript);
        target.appendChild(newScript);
      }
    }


  // public addScript(trackingDetails: ITrackingDetails) {
  //   this.addHeaderScript(trackingDetails.head);
  //   this.addBodyScript(trackingDetails.body);
  // }

  // private addHeaderScript(headerScript: string): void {
  //   const regExp = RegExp('<script>');
  //   let newScript;
  //   if (regExp.test(headerScript)) {
  //     const target = document.getElementsByTagName('head')[0];
  //     const inlineScript = this.parseHTML(headerScript);
  //     target.appendChild(inlineScript);
  //   } else {
  //     const target = document.getElementsByTagName('head')[0];
  //     newScript = document.createElement('script');
  //     const inlineScript = document.createTextNode(headerScript);
  //     newScript.appendChild(inlineScript);
  //     target.appendChild(newScript);
  //   }
  // }

  // private addBodyScript(bodyScript: string): void {
  //   const regExp = RegExp('<script>');
  //   let newScript;
  //   if (regExp.test(bodyScript)) {
  //     const target = document.getElementsByTagName('body')[0];
  //     const inlineScript = this.parseHTML(bodyScript);
  //     target.appendChild(inlineScript);
  //   } else {
  //     const target = document.getElementsByTagName('body')[0];
  //     newScript = document.createElement('script');
  //     const inlineScript = document.createTextNode(bodyScript);
  //     newScript.appendChild(inlineScript);
  //     target.appendChild(newScript);
  //   }
  // }
}
