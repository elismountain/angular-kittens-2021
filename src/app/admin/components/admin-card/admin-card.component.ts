import { ChangeDetectionStrategy, Component, Output, EventEmitter, OnInit} from '@angular/core';
import { BaseCategoryCardDirective } from 'src/app/shared/directives/base-category-card.directive';
import { AdminCategory } from '../../models/admin-category';

@Component({
  selector: 'app-admin-card',
  templateUrl: './admin-card.component.html',
  styleUrls: ['./admin-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminCardComponent
  extends BaseCategoryCardDirective<AdminCategory>
  implements OnInit
  {

    @Output() openCategory = new EventEmitter<AdminCategory['id']>();
    @Output() editCategory = new EventEmitter<AdminCategory['id']>();
    @Output() activateCategory = new EventEmitter<AdminCategory['id']>();
    @Output() deactivateCategory = new EventEmitter<AdminCategory['id']>();
    @Output() deliteCategory = new EventEmitter<AdminCategory['id']>();

  ngOnInit(): void {}

}
