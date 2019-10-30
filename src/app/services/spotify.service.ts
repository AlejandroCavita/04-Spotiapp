import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) {
    console.log('servicio listo para utilizar');
   }

   getQuery( query: string) {
      const url = `https://api.spotify.com/v1/${query}`;

      const headers = new HttpHeaders({
        Authorization: 'Bearer BQAz85ta57gBfZlRIkRiPu5xte1FCRKZFyjE6FwbsttgTISpbk8uby8gxhEAh6AtieqN56OLxaL2MSLp3RM'
      });

      return this.http.get(url, {headers});
   }

   getNewReleases() {

    return this.getQuery('browse/new-releases?limit=20')
              .pipe( map((data: any) => data.albums.items));
   }

   getArtists( termino: string ) {

    return this.getQuery(`search?q=${ termino }&type=artist&limit=10`)
              .pipe( map((data: any) => data.artists.items));
   }

   getArtist( id: string ) {
    return this.getQuery(`artists/${id}`);
   }

   getTopTracks( id: string ) {
    return this.getQuery(`artists/${ id }/top-tracks?country=MX`)
                .pipe( map((data: any) => data.tracks));

   }
}
