import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ISearchItem } from '../../models/search-item.model';
import { ISearchResponse } from '../../models/search-response.model';
import { YoutubeService } from 'src/app/youtube/services/youtube.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [YoutubeService],
})

export class SearchResultComponent implements OnInit {
  public itemsArray: ISearchItem[];
  public totalResults: number;
  public resultsPerPage: number;
  public results: Observable<ISearchResponse[]>;
  public response;



  constructor(public youtubeService: YoutubeService) {
   }

 ngOnInit() {
  this.response = this.youtubeService.getSearchResult();
  this.response.subscribe(
    innerResult => {
      this.results = innerResult;
      console.log("innerResult");
    }
    );
  } 
}

