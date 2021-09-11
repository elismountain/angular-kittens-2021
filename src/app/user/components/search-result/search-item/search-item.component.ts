import { ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import { BaseCategoryCardDirective } from 'src/app/shared/directives/base-category-card.directive';
import { UserCategory } from '../../../models/user-category';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class SearchItemComponent extends BaseCategoryCardDirective<UserCategory>
  implements OnInit

{
  ngOnInit(): void {}
}

