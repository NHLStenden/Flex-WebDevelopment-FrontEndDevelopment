import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CoverArtArchiveResponse} from '../classes/cover-art-archive-response';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CoverArtArchiveService {
  // The Police, Regatta the Blanc = http://www.coverartarchive.org/release/e104844e-3ff4-3388-9d13-0e527a77cf3b
  private serverAddress = 'http://coverartarchive.org/release/';

  constructor(private http: HttpClient) { }

  public getCoverArtItems(mbid: string): Observable<CoverArtArchiveResponse> {
    const data = this.http.get<CoverArtArchiveResponse>(this.serverAddress + mbid);
    return data;
  }

}
