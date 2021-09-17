import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';
import { MatDialog} from '@angular/material/dialog';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-new-card',
  templateUrl: './new-card.component.html',
  styleUrls: ['./new-card.component.scss']
})
export class NewCardComponent implements OnInit {
  
  fileName = ''; 

  public cardForm = new FormGroup({
    title: new FormControl('', Validators.minLength(3)),
    discription: new FormControl('', Validators.minLength(3)),
    image: new FormControl('', Validators.required),
    link: new FormControl('', Validators.required),
  });

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialog,
    // private http: HttpClient
  ) {
   }

   createCardForm() {
    this.cardForm = this.formBuilder.group({
      'title':  ['', Validators.minLength(3) ],
      'discription':  ['', Validators.minLength(3) ],
      'image': ['', Validators.required],
      'link': ['', Validators.required],
    })
  }

  ngOnInit(): void {
    this.createCardForm()
  }

  validateElement(key: string) {
    !this.cardForm.controls[key].valid && this.cardForm.controls[key].dirty
    }

  //   onFileSelected(event: any) {

  //     const file:File = event.target.files[0];

  //     if (file) {

  //         this.fileName = file.name;

  //         const formData = new FormData();

  //         formData.append("thumbnail", file);

  //         const upload$ = this.http.post("/api/thumbnail-upload", formData);

  //         upload$.subscribe();
  //     }
  // }
}
