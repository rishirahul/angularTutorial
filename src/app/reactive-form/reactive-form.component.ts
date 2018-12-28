import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormValidators} from './rective-form.validators';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  form = new FormGroup({
    account: new FormGroup({
      'username' : new FormControl('', [Validators.required, Validators.minLength(3),
        ReactiveFormValidators.cannotContainSpace],
        ReactiveFormValidators.shouldBeUnique),
      'password' : new FormControl()
    })
  });

  constructor() { }

  ngOnInit() {
  }

  get username() {
    return this.form.get('account.username');
  }

  login() {
    console.log(this.form.value);
    // if (!valid) {
    //   this.form.setErrors({
    //     invalidLogin: true;
    //   });
    // }
  }

}
