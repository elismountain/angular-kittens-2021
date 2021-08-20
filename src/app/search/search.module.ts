import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SearchItemComponent } from './search-item/search-item.component';

@NgModule({
  declarations: [SearchComponent, SearchResultsComponent, SearchItemComponent],
  imports: [CommonModule],
})
export class SearchModule {}
