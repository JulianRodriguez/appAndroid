import { TestBed, async } from '@angular/core/testing';
import { LoginProvider } from '../login-provider/login.provider';
import { ApiProvider } from '../api-provider/api.provider';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';

describe('LoginProvider', () => {
  let loginProvider: LoginProvider;
  let api: ApiProvider;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        LoginProvider,
        ApiProvider
      ],
      imports: [
        HttpClientModule
      ]
    });
  }));

  beforeEach(() => {
    loginProvider = TestBed.get(LoginProvider);
    api = TestBed.get(ApiProvider);
  });

  it('should be created', () => {
    expect(loginProvider instanceof LoginProvider).toBeTruthy();
  });

  it('should do login', () => {
    const spy = spyOn(api, 'post').and.returnValue(of());
    loginProvider.doLogin('username', 'password');
    expect(spy).toHaveBeenCalled();
  });
});
