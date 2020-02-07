import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { LoginProvider } from '../providers/login-provider/login.provider';
import { RegisterProvider } from '../providers/register-provider/register.provider';

@Component({
    selector: 'app-register',
    templateUrl: 'register.page.html',
    styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

    public registerForm: FormGroup;
    public emailExists = false;
    public userExists = false;

    constructor(
        private readonly navController: NavController,
        private readonly loginProvider: LoginProvider,
        private readonly registerProvider: RegisterProvider
    ) { }

    ngOnInit() {
        this.initializeForm();
    }

    public goBack(): void {
        this.navController.navigateBack('login');
    }

    public doregister(): void {
         const { email, alias, password } = this.registerForm.value;
        this.registerProvider.register(this.registerForm.get('alias').value, this.registerForm.get('email').value, this.registerForm.get('password').value).subscribe((resp) => {
          console.log(resp);
            this.navController.navigateRoot('login');
        });
    }

    private initializeForm(): void {
        this.registerForm = new FormGroup({
            email: new FormControl(null, [Validators.required, Validators.email]),
            alias: new FormControl(null, [Validators.required, Validators.minLength(6)]),
            password: new FormControl(null, [Validators.required, Validators.minLength(6)])
        });
        this.registerForm.get('email').valueChanges.subscribe(value => {
            console.log(value);
            this.emailExists = false;
              console.log('No igual');
              this.registerProvider.checkEmail(value).subscribe(exists => {
                console.log('Valor del exists');
                  console.log(exists);
                if (exists) {
                  this.emailExists = true;
                }
              });
          });
          this.registerForm.get('alias').valueChanges.subscribe(value => {
            console.log(value);
            this.userExists = false;
            console.log('Username');
              this.registerProvider.checkUser(value).subscribe(exists => {
                console.log('Exists dle username');
                console.log(exists);
                if (exists) {
                  this.userExists = true;
                }
              });
          });
    }
}