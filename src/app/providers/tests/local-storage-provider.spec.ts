import { TestBed, async } from '@angular/core/testing';
import { LocalStorageProvider } from '../local-storage/local-storage.provider';

describe('LocalStorageProvider', () => {
  let localStorageProvider: LocalStorageProvider;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        LocalStorageProvider
      ],
      imports: []
    });
  }));

  beforeEach(() => {
    localStorageProvider = TestBed.get(LocalStorageProvider);
  });

  it('should be created', () => {
    expect(localStorageProvider instanceof LocalStorageProvider).toBeTruthy();
  });
});
