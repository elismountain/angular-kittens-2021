import { Component, Input, OnInit, ViewContainerRef } from '@angular/core';
import {FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';
import {MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss'],
})

export class LoginModalComponent implements OnInit {

  public userForm = new FormGroup({
    email: new FormControl('', Validators.email),
    password: new FormControl('', Validators.minLength(6)),
  });
  

  @Input() selfRef!: ViewContainerRef;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<LoginModalComponent>
  ) {}

  ngOnInit(): void {

    this.userForm = this.fb.group({
      email: new FormControl('', Validators.email),
      password: new FormControl('', Validators.minLength(6))
    });
  }


  openRegistration() {
    this.selfRef.clear();
  }

  openLogin() {
    this.selfRef.clear();
  }
}
