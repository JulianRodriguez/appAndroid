import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { LoginPage } from './login.page';
import { TestSharedModule } from '../tests-shared/test-shared-module';
import { NavController } from '@ionic/angular';
import { of } from 'rxjs';

describe('LoginPage', () => {
  let fixture: any;
  let component: LoginPage;
  let navController: NavController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginPage],
      imports: [...TestSharedModule.imports],
      providers: [...TestSharedModule.providers],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
  });

  it('should be defined', () => {
    expect(component).toBeDefined();
  });

  it('should be defined', () => {
    component.ngOnInit();
    expect(component.loginForm).toBeDefined();
  });

  it('should open register', () => {
    const spy = spyOn((component as any).navController, 'navigateForward');
    component.register();
    expect(spy).toHaveBeenCalled();
  });

  it('should do login', () => {
    spyOn((component as any).loginProvider, 'doLogin').and.returnValue(of({}));
    const spy = spyOn((component as any).navController, 'navigateRoot');
    component.ngOnInit();
    component.doLogin();
    expect(spy).toHaveBeenCalled();
  });

});
