import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { MatIconModule } from '@angular/material/icon'
import { NavbarComponent } from './navbar/navbar.component';
import { LiveStatusComponent } from './live-status/live-status.component';
import { PnrStatusComponent } from './pnr-status/pnr-status.component';
import { Error404Component } from './error404/error404.component';
import { LiveStationComponent } from './live-station/live-station.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TrainsStationComponent } from './trains-station/trains-station.component';
import { TrainInfoComponent } from './train-info/train-info.component';
import { RailApiService } from './rail-api.service';
import { RailUtilsService } from './rail-utils.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    LiveStatusComponent,
    PnrStatusComponent,
    Error404Component,
    LiveStationComponent,
    TrainsStationComponent,
    TrainInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatIconModule,
    FormsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    RailApiService,
    RailUtilsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
