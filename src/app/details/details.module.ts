import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { DetailsPage } from './details.page';
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
        component: DetailsPage
      }
    ])
  ],
  declarations: [DetailsPage]
})
export class DetailsPageModule {}
