import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoadingOverlayModule } from './lib/loading-overlay/loading-overlay.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LoadingOverlayModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
