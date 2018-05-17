import { Component, OnInit } from '@angular/core';

import { UsersService } from '../../services/users.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})

export class SignUpPageComponent implements OnInit {
    public signUpForm: FormGroup;


  constructor(public formBuilder:FormBuilder,public usersService: UsersService,public router: Router) {
    this.signUpForm = new FormGroup({
        name: new FormControl(),
        username: new FormControl(),
        email: new FormControl(),
        celphone: new FormControl(),
        password: new FormControl(),

    });

  }

  signUp() {
    this.usersService.signUp(
      this.signUpForm.get('name').value,
      this.signUpForm.get('username').value,
      this.signUpForm.get('email').value,
      this.signUpForm.get('celphone').value,
      this.signUpForm.get('password').value).subscribe(loginResponse => {
        this.usersService.login(
             this.signUpForm.get('username').value,
             this.signUpForm.get('password').value).subscribe(loginResponse => {
                    this.router.navigate(['categorys']);
                }, error => {
                })

      }, error => {

      })
  }


    ngOnInit() {
        window.scroll(0,0)

  }
}