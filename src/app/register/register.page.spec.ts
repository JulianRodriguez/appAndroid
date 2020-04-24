import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { RegisterPage } from './register.page';
import { TestSharedModule } from '../tests-shared/test-shared-module';
import { NavController } from '@ionic/angular';
import { RegisterProvider } from '../providers/register-provider/register.provider';
import { of } from 'rxjs';

describe('RegisterPage', () => {
  let fixture: any;
  let component: RegisterPage;
  let navController: NavController;
  let registerProvider: RegisterProvider;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterPage],
      imports: [...TestSharedModule.imports],
      providers: [...TestSharedModule.providers],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterPage);
    component = fixture.componentInstance;
    navController = TestBed.get(NavController);
    registerProvider = TestBed.get(RegisterProvider);
  });

  it('should be defined', () => {
    expect(component).toBeDefined();
  });

  it('should be defined', () => {
    const spy = spyOn(navController, 'navigateBack');
    component.goBack();
    expect(spy).toHaveBeenCalledWith('login');
  });

  it('should be defined', () => {
    spyOn(registerProvider, 'checkEmail').and.returnValue(of(true));
    spyOn(registerProvider, 'checkUser').and.returnValue(of(true));
    component.ngOnInit();
    component.registerForm.patchValue({
      email: '',
      alias: ''
    });
    expect(component.userExists && component.emailExists).toBeTruthy();
  });

  it('should do register', () => {
    spyOn(registerProvider, 'register').and.returnValue(of(true));
    const spy = spyOn(navController, 'navigateRoot');
    component.ngOnInit();
    component.doregister();
    expect(spy).toHaveBeenCalledWith('login');
  });
});
