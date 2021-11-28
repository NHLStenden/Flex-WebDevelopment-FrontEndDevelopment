import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MusicBrainzResponse} from '../music-brainz-response';

@Injectable({
  providedIn: 'root'
})
export class MusicBrainzService {

  // http://musicbrainz.org/ws/2/release/?query=album:Regatta%20de%20blanc%20AND%20status:official%20AND%20artist:The%20Police
  private serverAddress = 'http://musicbrainz.org/ws/2/release';

  constructor(private http: HttpClient) { }

  /**
   *
   * @param artist
   * @param album
   */
  searchAlbumArtist(artist: string, album: string): Observable<MusicBrainzResponse> {

    artist = artist ? artist : '';
    album = album ? album : '';

    const searchStr: string = 'album:' + album + ' AND artist:' + artist + ' AND status:official';
    const corsHeaders: HttpHeaders = new HttpHeaders({'Content-Type':  'application/json'});

    const data = this.http.get<MusicBrainzResponse>(this.serverAddress, {
      params: {query: searchStr },
      headers: corsHeaders
    });
    return data;
  }

  /**
   *
   * @param artist
   */
  searchArtist(artist: string): Observable<MusicBrainzResponse> {

    artist = artist ? artist : '';

    const searchStr: string = 'artist:' + artist + ' AND status:official';
    const corsHeaders: HttpHeaders = new HttpHeaders({'Content-Type':  'application/json'});

    const data = this.http.get<MusicBrainzResponse>(this.serverAddress, {
      params: {query: searchStr },
      headers: corsHeaders
    });
    return data;
  }

}
