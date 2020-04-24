import { TestBed, async } from '@angular/core/testing';
import { LoginProvider } from '../login-provider/login.provider';
import { ApiProvider } from '../api-provider/api.provider';
import { HttpClientModule } from '@angular/common/http';

describe('LoginProvider', () => {
  let loginProvider: LoginProvider;

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
  });

  it('should be created', () => {
    expect(loginProvider instanceof LoginProvider).toBeTruthy();
  });
});
