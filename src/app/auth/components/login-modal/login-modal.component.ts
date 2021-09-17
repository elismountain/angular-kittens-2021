import { Component, Input, OnInit, ViewContainerRef } from '@angular/core';
import {FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';
import { MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss'],
})

export class LoginModalComponent implements OnInit {

  public userForm = new FormGroup({
    email: new FormControl('', Validators.email),
    password: new FormControl('', Validators.minLength(6)),
    first: new FormControl('', Validators.minLength(2)),
    last: new FormControl('', Validators.minLength(2)),
  });
  

  @Input() selfRef!: ViewContainerRef;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialog
  ) {}

//   onFormSubmit(): void {
//     console.log('First Name:' + this.userForm.get('first').value);
//     console.log('Last Name:' + this.userForm.get('last').value);
//     console.log('Email:' + this.userForm.get('email').value);
//     console.log('Password:' + this.userForm.get('password').value);
// }

  createForm() {
    this.userForm = this.formBuilder.group({
      'first':  ['', Validators.minLength(2) ],
      'last':  ['', Validators.minLength(2) ],
      'email': ['', Validators.email],
      'password': ['', Validators.minLength(6)],
    })
  }

  ngOnInit(): void {
    this.createForm()
  }

  openRegistration() {
    this.selfRef.clear();
  }

  openLogin() {
    this.selfRef.clear();
  }

  validateElement(key: string) {
    !this.userForm.controls[key].valid && this.userForm.controls[key].dirty
    }
}
