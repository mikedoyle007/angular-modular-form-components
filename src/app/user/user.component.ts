import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.buildForm();
  }

  buildForm(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      address: this.createAddress()
    });
  }

  createAddress(): FormGroup {
    return this.fb.group({
      county: ['', Validators.required],
      state: ['', Validators.required]
    });
  }

}
