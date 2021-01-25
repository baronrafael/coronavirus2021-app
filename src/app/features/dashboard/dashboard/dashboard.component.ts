import { Component, OnInit } from '@angular/core';
import { WorldometersService } from '../../../core/services/worldometers/worldometers.service';
import { CovidAll } from '../../../core/interfaces/covid-all';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  globalTodayData!: CovidAll;

  constructor(private worldometersService: WorldometersService) { }

  ngOnInit(): void {
    this.getGlobalTotals();
  }

  getGlobalTotals() {
    this.worldometersService.getGlobalTotals()
    .subscribe(
      res => {
        //console.log(res);
        this.globalTodayData = res;
        console.log(this.globalTodayData);
      },
      err => {
        console.log(err);

      }
    );
  }

}
