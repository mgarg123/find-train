import { Component, OnInit } from '@angular/core';
import { RailApiService } from '../rail-api.service';

@Component({
  selector: 'app-live-station',
  templateUrl: './live-station.component.html',
  styleUrls: ['./live-station.component.css']
})
export class LiveStationComponent implements OnInit {

  constructor(private _railApiService: RailApiService) { }

  public stationCode: string;
  public hours: string = "2";


  // public result = [{
  //   "Number": "2716",
  //   "Name": "ASR NED EXP SPL",
  //   "ScheduleArrival": "SRC",
  //   "ScheduleDeparture": "13:20",
  //   "ExpectedArrival": "SRC",
  //   "ExpectedDeparture": "13:20",
  //   "Delay": "00:00",
  //   "Platform": ""
  // },
  // {
  //   "Number": "3294",
  //   "Name": "RJPB HAMSFR SPL",
  //   "ScheduleArrival": "SRC",
  //   "ScheduleDeparture": "13:40",
  //   "ExpectedArrival": "SRC",
  //   "ExpectedDeparture": "13:40",
  //   "Delay": "00:00",
  //   "Platform": ""
  // },
  // {
  //   "Number": "2566",
  //   "Name": "BIHAR S K SPL",
  //   "ScheduleArrival": "SRC",
  //   "ScheduleDeparture": "14:15",
  //   "ExpectedArrival": "SRC",
  //   "ExpectedDeparture": "14:15",
  //   "Delay": "00:00",
  //   "Platform": ""
  // }]

  public result = [];
  public allData = [];
  public offset: number = 0;
  public limit: number = 5;
  public selectedOffset: number;

  ngOnInit(): void {
  }

  counter(i: number) {
    return new Array(i);
  }

  changePage(pageNo: number) {
    if (pageNo > 0 && pageNo <= this.offset) {
      let dataFrom = (pageNo - 1) * this.limit;
      let dataTo = pageNo * this.limit;
      this.selectedOffset = pageNo;
      this.result = this.allData.filter((val, index) => index >= dataFrom && index < dataTo);
    }

  }

  onArrowLeft(event) {
    // console.log("Left Pressed" + event.keyCode)
    this.changePage(this.selectedOffset - 1);
  }

  onArrowRight() {
    // console.log("Right Pressed")
    this.changePage(this.selectedOffset + 1);
  }


  fetchLiveStation() {
    this._railApiService.getLiveStation(this.stationCode, this.hours).subscribe(data => {
      this.allData = [];
      this.result = [];
      this.allData = data["Trains"];
      if (this.allData.length > 5) {
        this.result = this.allData.filter((val, index) => index < 5);
        this.offset = Math.ceil(this.allData.length / this.limit);
        this.selectedOffset = 1;
      } else {
        this.result = this.allData;
      }
      // console.log(this.allData)
    })
  }
}
