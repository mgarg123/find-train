import { Component, OnInit } from '@angular/core';
import { RailApiService } from '../rail-api.service';

@Component({
  selector: 'app-trains-station',
  templateUrl: './trains-station.component.html',
  styleUrls: ['./trains-station.component.css']
})
export class TrainsStationComponent implements OnInit {

  constructor(private _railApiService: RailApiService) { }

  public stationCode: string;
  public result: Array<any> = [];
  public allData: Array<any> = [];
  public offset: number = 0;
  public limit: number = 5;
  public selectedOffset: number;
  public arr;

  ngOnInit(): void {
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


  fetchAllTrains() {
    this._railApiService.getAllTrainsForStation(this.stationCode).subscribe(data => {
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

    });
  }

}
