import { ITrackingDetails } from './../interfaces/tracking-details.interface';

export class TrackingDetails implements ITrackingDetails {
 public orgId: number;
 public head: string;
 public body: string;
 public eventRegistration: string;
}
