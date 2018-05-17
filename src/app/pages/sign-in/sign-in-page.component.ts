import { Component, OnInit } from '@angular/core';

import { UsersService } from '../../services/users.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.css']
})

export class SignInPageComponent implements OnInit {
    public signInForm: FormGroup;
    public loginError: string;


      constructor(public formBuilder:FormBuilder,public usersService: UsersService,public router: Router) {
    this.signInForm = new FormGroup({
        username: new FormControl(),
        password: new FormControl()
    });

  }

  doLogin() {
    this.usersService.login(
      this.signInForm.get('username').value,
      this.signInForm.get('password').value).subscribe(loginResponse => {
        this.router.navigate(['categorys']);
        window.location.reload();
      }, error => {
        this.loginError = 'Vuelve a intentarlo' ;
      })

  }


    ngOnInit() {
        window.scroll(0,0)

  }
}