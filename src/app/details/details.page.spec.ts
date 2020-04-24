import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { DetailsPage } from './details.page';
import { TestSharedModule } from '../tests-shared/test-shared-module';
import { NavController } from '@ionic/angular';

describe('DetailsPage', () => {
  let fixture: any;
  let component: DetailsPage;
  let navController: NavController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsPage],
      imports: [...TestSharedModule.imports],
      providers: [...TestSharedModule.providers],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsPage);
    component = fixture.componentInstance;
    navController = TestBed.get(NavController);
  });

  it('should be defined', () => {
    expect(component).toBeDefined();
  });

  it('should exec ngOnInit', () => {
    (component as any).navParamsProvider = {
      params: {id: 0}
    };
    component.ngOnInit();
    expect(component.product).toEqual({id: 0});
  });

  it('should be defined', () => {
    const spy = spyOn(navController, 'navigateBack');
    component.goBack();
    expect(spy).toHaveBeenCalledWith('/home');
  });
});
