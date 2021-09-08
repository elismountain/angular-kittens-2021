import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { FilterComponent } from './components/filter/filter.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { SearchItemComponent } from './components/search-result/search-item/search-item.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/header/login/login.component';
import { SearchComponent } from './components/header/search/search.component';

@NgModule({
  declarations: [
    FilterComponent,
    SearchResultComponent,
    SearchItemComponent,
    SearchComponent,
    HeaderComponent,
    LoginComponent,
    SearchItemComponent

  ],
  imports: [
    CommonModule, MaterialModule
  ], 
  exports: [ MaterialModule,  HeaderComponent, FilterComponent, SearchResultComponent]
})

export class UserModule { }
