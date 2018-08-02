import { RegistrationComponent } from './registration/registration.component';
import { AppRoutingModule } from './app-routing-module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
<<<<<<< HEAD
import { CustomTrackingUiComponent } from './custom-tracking-ui/custom-tracking-ui.component';

@NgModule({
  declarations: [AppComponent, CustomTrackingUiComponent],
  imports: [BrowserModule],
=======
import { PlayerInformationComponent } from './player-information/player-information.component';
import { GuardianInformationComponent } from './guardian-information/guardian-information.component';
import { TournamentTeamSignupComponent } from './tournament-team-signup/tournament-team-signup.component';
import { SuccessfullPaymentComponent } from './successfull-payment/successfull-payment.component';
import { WithScriptComponent } from './with-script/with-script.component';
import { WithoutScriptComponent } from './without-script/without-script.component';
import { RouterModule } from '../../node_modules/@angular/router';
import { EventRegistrationComponent } from './event-registration/event-registration.component';
import { EventBillingInfoComponent } from './event-billing-info/event-billing-info.component';
import { TournamentBillingInfoComponent } from './tournament-billing-info/tournament-billing-info.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerInformationComponent,
    GuardianInformationComponent,
    TournamentTeamSignupComponent,
    SuccessfullPaymentComponent,
    WithScriptComponent,
    WithoutScriptComponent,
    RegistrationComponent,
    EventRegistrationComponent,
    EventBillingInfoComponent,
    TournamentBillingInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [RouterModule],
>>>>>>> 45b486fcb4543ab019309a529ce1a9d519d5c542
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
