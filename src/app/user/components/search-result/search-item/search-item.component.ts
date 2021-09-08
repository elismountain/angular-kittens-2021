import { Component, Input, Output, EventEmitter} from '@angular/core';
import { SearchItem } from '../search-item.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent {

  @Input() item: SearchItem = {
    id: '',
    title: '',
    podcastNamber: 0,
    type: '',
    description: '',
    imgUrl: '',
    viewCount: 0,
    likeCount: 0,
    dislikeCount: 0,
    commentCount: 0,
  };

  @Output() openItem = new EventEmitter<SearchItem['id']>();

}
