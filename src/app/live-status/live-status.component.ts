import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-live-status',
  templateUrl: './live-status.component.html',
  styleUrls: ['./live-status.component.css']
})
export class LiveStatusComponent implements OnInit {

  constructor() { }

  public trainNo: string;
  public runningDate: string = "29";

  ngOnInit(): void {
  }

  fetchLiveStatus() {

  }

}
