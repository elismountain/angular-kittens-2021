import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModalComponent } from './components/login-modal/login-modal.component';
import { MaterialModule } from '../material/material.module';
import { NewCardComponent } from './components/new-card/new-card.component';

@NgModule({
  declarations: [ LoginModalComponent, NewCardComponent ],
  imports: [
    CommonModule, MaterialModule 
  ], 
  exports: [ LoginModalComponent, NewCardComponent ]
})
export class AuthModule { }
