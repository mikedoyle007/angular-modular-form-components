import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-user-array',
  templateUrl: './user-array.component.html',
  styleUrls: ['./user-array.component.scss']
})
export class UserArrayComponent implements OnInit {

  @Input() parent: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
