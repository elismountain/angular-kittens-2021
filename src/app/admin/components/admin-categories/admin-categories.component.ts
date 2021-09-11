import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AdminCategory } from '../../models/admin-category';

@Component({
  selector: 'app-admin-categories',
  templateUrl: './admin-categories.component.html',
  styleUrls: ['./admin-categories.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminCategoriesComponent {
  @Input() categories: AdminCategory[] = [];
  editMode: boolean;
  editedCategoryName: any;

  constructor() {
    this.editMode = false;
  }


  onOpenCategory(id: AdminCategory['id']) {
    console.log(id);
  }

  onEditCategory(id: AdminCategory['id']) {
    console.log(`Edit: $(id)`);
    this.editMode = true;
  }

  onActivateCategory(id: AdminCategory['id']) {
    console.log(`Activate: $(id)`);
  }

  onDeactivateCategory(id: AdminCategory['id']) {
    console.log(`Deactivate: $(id)`);
  }

  onDeliteCategory(id: AdminCategory['id']) {
    console.log(`Delite: $(id)`);
  }
}
