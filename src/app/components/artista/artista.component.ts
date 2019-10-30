import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent {

  artista: any = {};
  loading: boolean;
  topTracks: any[] = [];

  constructor( private router: ActivatedRoute, private spotifyService: SpotifyService ) {

    this.loading = true;

    this.router.params.subscribe( params => {
      this.getArtista( params.id );
      this.getTopTracks( params.id );

      setTimeout(() => {this.loading = false}, 1000 );
    });
  }

  getArtista( id: string) {

    this.spotifyService.getArtist( id )
        .subscribe(artista => {
          console.log(artista);
          this.artista = artista;
        });
  }

  getTopTracks( id: string) {
    this.spotifyService.getTopTracks( id )
        .subscribe(topTracks => {
          console.log(topTracks);
          this.topTracks = topTracks;
        });
  }


}
