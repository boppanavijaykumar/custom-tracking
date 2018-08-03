import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {

  public header: string;
  public body: string;
  public registration: string;
  private messageSource = new BehaviorSubject<any>(this.header);
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  public changeMessage(message) {
    this.messageSource.next(message);
  }

}
