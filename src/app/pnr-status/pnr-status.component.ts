import { Component, OnInit } from '@angular/core';
import { RailApiService } from '../rail-api.service';

@Component({
  selector: 'app-pnr-status',
  templateUrl: './pnr-status.component.html',
  styleUrls: ['./pnr-status.component.css']
})
export class PnrStatusComponent implements OnInit {

  constructor(private _railApiService: RailApiService) { }

  public pnrNo: string;
  public result = {
    PnrNumber: "",
    TrainNumber: "",
    TrainName: "",
    JourneyClass: "",
    ChatPrepared: "",
    From: "",
    To: "",
    JourneyDate: ""
  };

  ngOnInit(): void {
  }


  fetchPnrInfo() {
    this._railApiService.getPnrInfo(this.pnrNo).subscribe(data => {
      this.result = data;
    })
  }
}
