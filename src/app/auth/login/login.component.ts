import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  passwordRegex: string = '((?=.*\d)(?=.*[a-zA-Z]).{4,20})';
  submitted = false;
  errors: string;
  public loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.pattern('.+@.+\..+')]],
    password: ['', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(20)]],
    rememberme: [false],

  });


  constructor(private authService: AuthService,
              private formBuilder: FormBuilder,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  login() {
    this.authService.login(this.loginForm.value)
      .subscribe((resp: any) => {
          this.submitted = true;
          this.router.navigate(['/pages']);
        },
        err => {
          this.errors = err.error.message;
        });
  }

}
