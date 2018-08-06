import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/services/data.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  message: string;

  constructor() { }

  ngOnInit() {
   // this.data.currentMessage.subscribe(message => this.message = message);
  }

}
