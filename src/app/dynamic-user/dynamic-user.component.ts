import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormArray, Validators } from "@angular/forms";


@Component({
  selector: 'app-dynamic-user',
  templateUrl: './dynamic-user.component.html',
  styleUrls: ['./dynamic-user.component.scss']
})
export class DynamicUserComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.buildForm();
  }

  buildForm(): void {
    this.form = this.fb.group({
      users: new FormArray([
        this.createUser()
      ])
    });
  }

  createUser(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
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
