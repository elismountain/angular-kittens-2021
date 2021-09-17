import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModalComponent } from './components/login-modal/login-modal.component';
import { NewCardComponent } from './components/new-card/new-card.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ LoginModalComponent, NewCardComponent ],
  imports: [
    CommonModule, SharedModule 
  ], 
  exports: [ LoginModalComponent, NewCardComponent ]
})
export class AuthModule { }
