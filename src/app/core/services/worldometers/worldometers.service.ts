import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CovidAll } from '../../interfaces/covid-all';

@Injectable({
  providedIn: 'root'
})
export class WorldometersService {

  private readonly getAllInfoUrl;

  constructor(private httpClient: HttpClient) {
    this.getAllInfoUrl = 'all'
  }

  getGlobalTotals() {
    return this.httpClient.get<CovidAll>(environment.BaseUrl+this.getAllInfoUrl);
  }

}
