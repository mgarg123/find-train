import { Component, OnInit } from '@angular/core';
import { ITrainInfo } from '../models/TrainInfo';
import { RailApiService } from '../rail-api.service';

@Component({
  selector: 'app-train-info',
  templateUrl: './train-info.component.html',
  styleUrls: ['./train-info.component.css']
})
export class TrainInfoComponent implements OnInit {

  constructor(private _railApiService: RailApiService) { }
  public trainNo: string;
  public result = {
    ResponseCode: "",
    Status: "",
    TrainNo: "",
    TrainName: "",
    Source: {
      Code: "",
      Arrival: ""
    },
    Destination: {
      Code: "",
      Arrival: ""
    },
    Message: "string"
  };


  ngOnInit(): void {
  }

  fetchTrainInfo() {
    this._railApiService.getTrainInfo(this.trainNo).subscribe(data => {
      this.result = data;
    })
  }

}
