import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './components/filter/filter.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { SearchItemComponent } from './components/search-result/search-item/search-item.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    FilterComponent,
    SearchResultComponent,
    SearchItemComponent,   
  ],
  imports: [
    CommonModule, SharedModule
  ], 
  exports: [ FilterComponent, SearchResultComponent, SearchItemComponent]
})

export class YoutubeModule {}
