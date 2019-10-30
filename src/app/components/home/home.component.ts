import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  nuevasCanciones: any[] = [];
  loading: boolean;
  error: string;

  constructor( private spotifyServices: SpotifyService) {

    this.loading = true;
    this.error = '';

    this.spotifyServices.getNewReleases()
      .subscribe( (releases: any) => {
        console.log(releases);
        this.nuevasCanciones = releases;
        setTimeout(() => {this.loading = false }, 1000);
      }, (errorServicio: any) => {
        console.log(errorServicio);
        this.loading = false;
        this.error = errorServicio.error.error.message;
      });
   }

  ngOnInit() {
  }

}
