import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { VideoCategory } from '../../models/video-category';


@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class SearchResultComponent implements OnInit {

  @Input() categories: VideoCategory[] = [];

  constructor() { }

 ngOnInit(): void {
  } 

  onOpenCategory(id: VideoCategory['id']) {
    console.log(id);
  }
}

