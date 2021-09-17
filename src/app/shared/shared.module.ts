import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSliderModule } from '@angular/material/slider';
import { MatDialogModule} from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { YoutubeService } from '../youtube/services/youtube.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    CommonModule,
    MatCardModule,
    MatButtonModule, 
    MatIconModule, 
    MatInputModule, 
    MatTabsModule, 
    MatFormFieldModule, 
    MatToolbarModule,
    MatSliderModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule
  ],
  exports: [
    CommonModule,
    MatCardModule,
    MatButtonModule, 
    MatIconModule, 
    MatInputModule, 
    MatTabsModule, 
    MatFormFieldModule, 
    MatToolbarModule,
    MatSliderModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule
  ], 
  providers: [
    {provide: HTTP_INTERCEPTORS,  useClass: YoutubeService, multi: true}
  ]
})

export class SharedModule { }
