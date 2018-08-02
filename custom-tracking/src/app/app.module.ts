import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomTrackingUiComponent } from './custom-tracking-ui/custom-tracking-ui.component';

@NgModule({
  declarations: [AppComponent, CustomTrackingUiComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
