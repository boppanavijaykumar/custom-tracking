import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-tracking-ui',
  templateUrl: './custom-tracking-ui.component.html',
  styleUrls: ['./custom-tracking-ui.component.css']
})
export class CustomTrackingUiComponent implements OnInit {
public header: string;
public body: string;
public registration: string;

  constructor() { }

  ngOnInit() {  }

}
