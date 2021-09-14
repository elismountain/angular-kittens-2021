import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { FilterComponent } from './components/filter/filter.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { SearchItemComponent } from './components/search-result/search-item/search-item.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginModalComponent } from './components/login-modal/login-modal.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    FilterComponent,
    SearchResultComponent,
    SearchItemComponent,
    HeaderComponent,
    SearchItemComponent,
    LoginModalComponent
    
  ],
  imports: [
    CommonModule, MaterialModule, SharedModule
  ], 
  exports: [ HeaderComponent, FilterComponent, SearchResultComponent, LoginModalComponent]
})

export class UserModule { }
