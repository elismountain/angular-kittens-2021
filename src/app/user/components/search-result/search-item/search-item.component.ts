import { Component, Input, Output, EventEmitter} from '@angular/core';
import { UserCategory } from '../../../models/user-category';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent {

  @Input() item: UserCategory = {
    id: '11',
    title: 'example category name',
    type: 'string',
    podcastNumber: '12',
    description: 'short description',
    imgUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    viewCount: '1',
    likeCount: '1',
    dislikeCount: '1',
    commentCount: '1',
  };

  @Output() openItem = new EventEmitter<UserCategory['id']>();

}
