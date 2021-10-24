import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api.service";
import {ActivatedRoute} from "@angular/router";
import {ArtistViewModel} from "../../modules/artist-view-model";
import 'automapper-ts';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public artistData : any
  public albums : any = []

  constructor(public api : ApiService, public ref : ActivatedRoute, public items : ArtistViewModel) {}

  ngOnInit(): void {
    let id = this.ref.snapshot.paramMap.get('id')
    this.artistData = []
    this.api.getArtistById(id).then(res => {
      this.artistData = res.results
    })

    this.api.getArtistTracks(id).then(res => {
      this.albums = res.results
    })

  }

}
