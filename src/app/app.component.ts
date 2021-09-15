import { Component } from '@angular/core';
import { videoCategories } from './app.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'components';
  videoCategories = videoCategories;


  ngOnInit(): void {
    this.title = 'components';
  }
}