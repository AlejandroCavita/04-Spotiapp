import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { logging } from 'protractor';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  artistas: any[] = [];
  loading: boolean;


  constructor( private spotifyService: SpotifyService) { }

  buscar( termino: string ) {

    this.loading = true;

    this.spotifyService.getArtists( termino )
        .subscribe((artists: any) => {
            console.log(artists);

            this.artistas = artists;
            setTimeout(() => {this.loading = false }, 1000);
        });
  }
}
