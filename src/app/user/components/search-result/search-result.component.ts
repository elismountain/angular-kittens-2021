import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { UserCategory } from '../../models/user-category';


@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class SearchResultComponent implements OnInit {

  @Input() categories: UserCategory[] = [];

  constructor() { }

 ngOnInit(): void {
  } 

  onOpenCategory(id: UserCategory['id']) {
    console.log(id);
  }
}

