import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { AdminCardComponent } from './components/admin-card/admin-card.component';
import { AdminCategoriesComponent } from './components/admin-categories/admin-categories.component';


@NgModule({
  declarations: [
    AdminCategoriesComponent, AdminCardComponent
  ],
  imports: [
    SharedModule, FormsModule
  ],
  exports: [
    AdminCategoriesComponent, FormsModule
  ]
})
export class AdminModule { }
