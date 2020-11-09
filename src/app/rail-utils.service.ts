import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RailUtilsService {

  constructor() { }

  getDatesForLiveStatus() {
    let today = new Date();
    let tomorrow = new Date()
    tomorrow.setDate(today.getDate() + 1)
    let yesterday = new Date()
    yesterday.setDate(today.getDate() - 1)
    let dBYesterday = new Date()
    dBYesterday.setDate(yesterday.getDate() - 1)

    let dates = {
      tom: tomorrow.getDate() + "-" + (tomorrow.getMonth() + 1) + "-" + tomorrow.getFullYear(),
      tod: today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear(),
      yest: yesterday.getDate() + "-" + (yesterday.getMonth() + 1) + "-" + yesterday.getFullYear(),
      dBYest: dBYesterday.getDate() + "-" + (dBYesterday.getMonth() + 1) + "-" + dBYesterday.getFullYear(),
    }

    // console.log(dates)
    return dates;
  }
}
