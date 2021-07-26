import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  myForm: FormGroup = new FormGroup({
    "userName": new FormControl("", [Validators.required,
    Validators.pattern('_[a-zA-Z0-9_-]*')]),
    "password": new FormControl("", []),
  });

  constructor() {
  }

  ngOnInit(): void {
  }

  submit() {

  }

}
