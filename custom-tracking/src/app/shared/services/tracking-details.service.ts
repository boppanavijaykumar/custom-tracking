import { httpOptions } from './../helper/http-header.const';
import { HttpClient } from '@angular/common/http';
import { ITrackingDetails } from './../interfaces/tracking-details.interface';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/observable';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable()
export class TrackingDetailsService {
  public header: string;
  public body: string;
  public registration: string;

  constructor(private http: HttpClient) {}

  public addTrackingDetails(
    trackingDetails: ITrackingDetails
  ): Observable<ITrackingDetails> {
    const url = environment.config.baseUrl + 'tsa/add';
    const httpRequest = this.http
      .request<ITrackingDetails>('POST', url, {
        body: JSON.stringify(trackingDetails),
        headers: httpOptions.headers
      })
      .pipe(map((json: any) => {
        if (json === null || json === undefined) {
          return null;
        }
        return json;
      })
      , catchError(err => this.handleError(err)));
    return httpRequest;
  }
  public handleError(arg0: any): any {
    throw new Error('not found');
  }
}
