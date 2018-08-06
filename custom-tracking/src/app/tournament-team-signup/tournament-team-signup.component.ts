import { DataService } from './../shared/services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tournament-team-signup',
  templateUrl: './tournament-team-signup.component.html',
  styleUrls: ['./tournament-team-signup.component.css']
})
export class TournamentTeamSignupComponent implements OnInit {
  message: string;
  constructor(private data: DataService) { }

  ngOnInit() {
   // this.data.currentMessage.subscribe(message => this.message = message);
  }

}
