import { Component, Input, OnInit } from '@angular/core';
import { SearchItemComponent } from './search-item/search-item.component';


@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})


export class SearchResultComponent implements OnInit {

  @Input() categories: SearchItemComponent[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}

