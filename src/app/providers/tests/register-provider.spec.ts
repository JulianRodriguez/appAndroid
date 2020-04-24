import { TestBed, async } from '@angular/core/testing';
import { RegisterProvider } from '../register-provider/register.provider';
import { ApiProvider } from '../api-provider/api.provider';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';

describe('RegisterProvider', () => {
  let registerProvider: RegisterProvider;
  let api: ApiProvider;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        RegisterProvider,
        ApiProvider
      ],
      imports: [
        HttpClientModule
      ]
    });
  }));

  beforeEach(() => {
    registerProvider = TestBed.get(RegisterProvider);
    api = TestBed.get(ApiProvider);
  });

  it('should be created', () => {
    expect(registerProvider instanceof RegisterProvider).toBeTruthy();
  });

  it('should check email', () => {
    const spy = spyOn(api, 'get').and.returnValue(of());
    registerProvider.checkEmail('');
    expect(spy).toHaveBeenCalled();
  });

  it('should check user', () => {
    const spy = spyOn(api, 'get').and.returnValue(of());
    registerProvider.checkUser('');
    expect(spy).toHaveBeenCalled();
  });

  it('should register', () => {
    const spy = spyOn(api, 'post').and.returnValue(of());
    registerProvider.register('username', 'password', 'email');
    expect(spy).toHaveBeenCalled();
  });
});
