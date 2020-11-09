import { Component, OnInit } from '@angular/core';
import { RailUtilsService } from '../rail-utils.service';

@Component({
  selector: 'app-live-status',
  templateUrl: './live-status.component.html',
  styleUrls: ['./live-status.component.css']
})
export class LiveStatusComponent implements OnInit {

  public dates = {
    tom: "",
    tod: "",
    yest: "",
    dBYest: ""
  }
  constructor(private _railUtilService: RailUtilsService) {
    this.dates = _railUtilService.getDatesForLiveStatus();
    this.runningDate = this.dates.tod;
  }

  public trainNo: string;
  public runningDate: string = "";

  ngOnInit(): void {
  }

  fetchLiveStatus() {

  }

}
