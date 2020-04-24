import { TestBed, async } from '@angular/core/testing';
import { NavParamsProvider } from '../nav-params/nav-params.provider';

describe('NavParamsProvider', () => {
  let navParamsProvider: NavParamsProvider;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        NavParamsProvider
      ],
      imports: []
    });
  }));

  beforeEach(() => {
    navParamsProvider = TestBed.get(NavParamsProvider);
  });

  it('should be created', () => {
    expect(navParamsProvider instanceof NavParamsProvider).toBeTruthy();
  });
});
