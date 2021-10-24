import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) { }

  public url : any = 'https://api.deezer.com/search?q='
  public charts_url : any = 'https://api.deezer.com/chart'
  public artist : any = 'https://api.deezer.com/artist/'
  public artistTracks : any = 'https://api.deezer.com/artist/'

  public async doSearch(item): Promise<{results : any}>{
    let data = []
    this.http.get(this.url + `${item}`).subscribe(res => {
      data.push(res['data'])
    })
    return { results : data }
  }

  public async getCharts(): Promise<{ results : any}> {
    let data = []
    this.http.get(this.charts_url).subscribe(res => {
      data.push(res['tracks']['data'])
    })
    return { results : data }
  }

  public async getArtistById(ref : any): Promise<{results : any}> {
    let data = []
    this.http.get(this.artist + `${ref}`).subscribe(res => {
      data.push(res)
    })
    return { results : data }
  }

  public async getArtistTracks(id : any): Promise<{ results : any }> {
    let data = []
    this.http.get(this.artistTracks + `${id}` + '/top?Limit=40').subscribe(res => {
      data.push(res['data'])
    })
    return { results : data}
  }

}
