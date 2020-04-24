import { TestBed, async } from '@angular/core/testing';
import { ApiProvider } from '../api-provider/api.provider';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('ApiProvider', () => {
  let apiProvider: ApiProvider;
  let http: HttpClient;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        ApiProvider
      ],
      imports: [
        HttpClientModule
      ]
    });
  }));

  beforeEach(() => {
    apiProvider = TestBed.get(ApiProvider);
    http = TestBed.get(HttpClient);
  });

  afterEach(() => {
    apiProvider = null;
  });

  it('should be created', () => {
    expect(apiProvider instanceof ApiProvider).toBeTruthy();
  });
});
