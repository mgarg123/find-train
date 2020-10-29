import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Error404Component } from './error404/error404.component';
import { LiveStationComponent } from './live-station/live-station.component';
import { LiveStatusComponent } from './live-status/live-status.component';
import { PnrStatusComponent } from './pnr-status/pnr-status.component';
import { TrainsStationComponent } from './trains-station/trains-station.component';
import { TrainInfoComponent } from './train-info/train-info.component';

const routes: Routes = [
  { path: '', redirectTo: 'live-status', pathMatch: "full" },
  { path: 'live-status', component: LiveStatusComponent },
  { path: 'pnr-status', component: PnrStatusComponent },
  { path: 'live-station', component: LiveStationComponent },
  { path: 'all-trains', component: TrainsStationComponent },
  { path: 'train-info', component: TrainInfoComponent },
  { path: '**', component: Error404Component },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

