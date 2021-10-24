import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api.service";
import {Charts} from "../../interface/charts";
import {ChartsViewModule} from "../../modules/charts-view-module";
import 'automapper-ts';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(public _apiService : ApiService) {

  }

  public artists : any = [];
  public charts : any = [];
  public searchId : any = '';


  public async search(): Promise<void> {
    this._apiService.doSearch(this.searchId).then(res => {
      this.artists = res.results
      console.log(this.artists)
    })
  }


  public async ngOnInit(): Promise<void> {
    this.artists = []
    this.charts = []
    this._apiService.getCharts().then(res => {
      this.charts = res.results
      console.log(res.results)
    })

  }

}
