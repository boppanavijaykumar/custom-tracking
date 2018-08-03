import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/services/data.service';

@Component({
  selector: 'app-custom-tracking-ui',
  templateUrl: './custom-tracking-ui.component.html',
  styleUrls: ['./custom-tracking-ui.component.css']
})
export class CustomTrackingUiComponent implements OnInit {
 public body: string;
// public registration: string;


  constructor(private data: DataService) { }

  ngOnInit() {
    this.update();
   }
   update() {
    console.log(this.body);
    this.data.changeMessage(this.body);
    // this.data.currentMessage.subscribe(message => this.data.header = message);

   }
}
