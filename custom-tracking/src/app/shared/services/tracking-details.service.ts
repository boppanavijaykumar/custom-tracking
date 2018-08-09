import { TrackingDetails } from './../model/tracking-details.model';
import { httpOptions } from './../helper/http-header.const';
import { HttpClient } from '@angular/common/http';
import { ITrackingDetails } from './../interfaces/tracking-details.interface';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/observable';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable()
export class TrackingDetailsService {
  public orgId = 35;
  public head: string;
  public body: string;
  public registration: string;

  constructor(private http: HttpClient) {}

  public addTrackingDetails(
    trackingDetails: ITrackingDetails
  ): Observable<ITrackingDetails> {
    const url = environment.config.baseUrl + 'tsa/add';
    return this.http
      .post<ITrackingDetails>(url, trackingDetails);
  }

  public getTrackingDetails(orgId: number): Observable<TrackingDetails> {
    const getTrackingDetailsUrl = environment.config.baseUrl + `tsa/get/${orgId}`;
    return this.http.get<TrackingDetails>(getTrackingDetailsUrl);
  }
}
