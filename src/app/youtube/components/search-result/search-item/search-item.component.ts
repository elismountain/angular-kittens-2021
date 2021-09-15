import { ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import { BaseCategoryCardDirective } from 'src/app/shared/directives/base-category-card.directive';
import { VideoCategory } from '../../../models/video-category';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class SearchItemComponent extends BaseCategoryCardDirective<VideoCategory>
  implements OnInit

{
  ngOnInit(): void {}
}

