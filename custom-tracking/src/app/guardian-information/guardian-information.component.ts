import { DataService } from './../shared/services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guardian-information',
  templateUrl: './guardian-information.component.html',
  styleUrls: ['./guardian-information.component.css']
})
export class GuardianInformationComponent implements OnInit {
  message: string;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message);

  }

}
