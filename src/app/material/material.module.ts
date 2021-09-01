import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSliderModule} from '@angular/material/slider';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule, 
    MatIconModule, 
    MatInputModule, 
    MatTabsModule, 
    MatFormFieldModule, 
    MatToolbarModule,
    MatSliderModule
  ],
  exports: [
    MatCardModule,
    MatButtonModule, 
    MatIconModule, 
    MatInputModule, 
    MatTabsModule, 
    MatFormFieldModule, 
    MatToolbarModule,
    MatSliderModule
  ]
})
export class MaterialModule {}