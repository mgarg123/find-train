import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IAllTrainsAtStation } from './models/AllTrainsAtStation';
import { ILiveStation } from './models/LiveStation';
import { ITrainInfo } from './models/TrainInfo';
import { IPnrStatus } from './models/PnrStatus';
import { IAutocompleteStation } from './models/AutocompleteStation';

@Injectable({
  providedIn: 'root'
})
export class RailApiService {

  constructor(private http: HttpClient) { }

  private apiKey: string = "77089c6b28a702d3bcc12698ddc1f35e";

  getLiveStation(stationCode: string, hours: string): Observable<ILiveStation[]> {
    const url: string = "https://indianrailapi.com/api/v2/LiveStation/apikey/" + this.apiKey + "/StationCode/" + stationCode + "/hours/" + hours + "/"
    return this.http.get<ILiveStation[]>(url);
  }

  getAllTrainsForStation(stationcCode: string): Observable<IAllTrainsAtStation[]> {
    const url: string = "https://indianrailapi.com/api/v2/AllTrainOnStation/apikey/" + this.apiKey + "/StationCode/" + stationcCode + "/"
    return this.http.get<IAllTrainsAtStation[]>(url)
  }

  getTrainInfo(trainNo: string): Observable<ITrainInfo> {
    const url: string = "https://indianrailapi.com/api/v2/TrainInformation/apikey/" + this.apiKey + "/TrainNumber/" + trainNo + "/"
    return this.http.get<ITrainInfo>(url);
  }

  getPnrInfo(pnrNo: string): Observable<IPnrStatus> {
    const url: string = "http://indianrailapi.com/api/v2/PNRCheck/apikey/" + this.apiKey + "/PNRNumber/" + pnrNo + "/"
    return this.http.get<IPnrStatus>(url);
  }

  getStationAutocomplete(stationKeyword: string): Observable<IAutocompleteStation> {
    const url = "https://indianrailapi.com/api/v2/AutoCompleteStation/apikey/" + this.apiKey + "/StationCodeOrName/" + stationKeyword + "/"
    return this.http.get<IAutocompleteStation>(url);
  }
}
