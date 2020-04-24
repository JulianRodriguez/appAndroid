import { CommonModule, LocationStrategy, PathLocationStrategy, Location } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UrlSerializer } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

export const TestSharedModule = {
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    HttpClientModule
  ],
  providers: [
    Location,
    UrlSerializer,
    { provide: LocationStrategy, useClass: PathLocationStrategy },
  ]
};
