import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ISearchResponse } from '../models/search-response.model';
import { ISearchItem } from '../models/search-item.model';


@Injectable()

export class YoutubeService {

  private item: ISearchItem[];

  constructor(private http: HttpClient) { }

  getSearchResult() {
    return this.http.get<ISearchResponse>('assets/response.json');
  }
}
