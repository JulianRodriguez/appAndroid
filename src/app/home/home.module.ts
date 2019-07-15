import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { QRScanner } from '@ionic-native/qr-scanner/ngx';
import { ProductProvider } from '../providers/product-provider/product.provider';
import { NavParamsProvider } from '../providers/nav-params/nav-params.provider';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  providers: [
    QRScanner,
    ProductProvider,
    NavParamsProvider
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
