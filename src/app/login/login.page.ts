import { Component, OnInit } from '@angular/core';
import { LoginProvider } from '../providers/login-provider/login.provider';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public loginForm: FormGroup;

  constructor(
    private readonly loginProvider: LoginProvider,
    private readonly navController: NavController
  ) {}

  ngOnInit() {
    this.initForm();
  }

  public doLogin(): void {
    const user = this.loginForm.value.user;
    const password = this.loginForm.value.password;
    this.loginProvider.doLogin(user, password)
      .subscribe((resp) => {
        if (resp) {
          this.navController.navigateRoot('/home');
        }
      });
  }

  private initForm(): void {
    this.loginForm = new FormGroup({
      user: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required])
    });
  }

}
