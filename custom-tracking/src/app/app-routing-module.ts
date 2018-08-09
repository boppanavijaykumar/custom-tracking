import { CustomTrackingUiComponent } from './custom-tracking-ui/custom-tracking-ui.component';
import { TournamentBillingInfoComponent } from './tournament-billing-info/tournament-billing-info.component';
import { EventBillingInfoComponent } from './event-billing-info/event-billing-info.component';
import { EventRegistrationComponent } from './event-registration/event-registration.component';
import { SuccessfullPaymentComponent } from './successfull-payment/successfull-payment.component';
import { RegistrationComponent } from './registration/registration.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TournamentTeamSignupComponent } from './tournament-team-signup/tournament-team-signup.component';
import { GuardianInformationComponent } from './guardian-information/guardian-information.component';
import { PlayerInformationComponent } from './player-information/player-information.component';
const routes: Routes = [
    {
        path: '',
        redirectTo: '/code-tracking',
        pathMatch: 'full'
    },
    {
        path: 'code-tracking',
        component: CustomTrackingUiComponent
    },
    {
        path: 'registration/:orgId',
        component: RegistrationComponent
    },
    {
        path: 'event-signup/:orgId',
        component: EventRegistrationComponent
    },
    {
        path: 'players-info',
        component: PlayerInformationComponent
    },
    {
        path: 'guardian-info',
        component: GuardianInformationComponent
    },
    {
        path: 'signup-teams',
        component: TournamentTeamSignupComponent
    },
    {
        path: 'event-payment',
        component: EventBillingInfoComponent
    },
    {
        path: 'tourny-payment',
        component: TournamentBillingInfoComponent
    },
    {
        path: 'successfull-payment',
        component: SuccessfullPaymentComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
