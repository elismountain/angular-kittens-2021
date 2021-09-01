import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/header/search/search.component';
import { LogoComponent } from './components/header/logo/logo.component';
import { MaterialModule } from '../material/material.module';
import { LoginComponent } from './components/header/login/login.component';
import { FilterComponent } from './components/filter/filter.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { SearchItemComponent } from './components/search-result/search-item/search-item.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchButtonComponent } from './components/header/search-button/search-button.component';

@NgModule({
  declarations: [
    SearchComponent,
    LogoComponent,
    LoginComponent,
    FilterComponent,
    SearchResultComponent,
    SearchItemComponent,
    HeaderComponent,
    SearchButtonComponent
  ],
  imports: [
    CommonModule, MaterialModule
  ], 
  exports: [SearchComponent, LogoComponent, MaterialModule, LoginComponent, HeaderComponent, SearchButtonComponent]
})

export class UserModule { }
