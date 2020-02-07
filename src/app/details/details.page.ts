import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NavParamsProvider } from '../providers/nav-params/nav-params.provider';

@Component({
  selector: 'app-details',
  templateUrl: 'details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  public product: any;

  constructor(
    private readonly navController: NavController,
    private readonly navParamsProvider: NavParamsProvider
  ) {}

  ngOnInit() {
    this.product = this.navParamsProvider.params;
  }

  public goBack(): void {
    this.navController.navigateBack('/home');
  }
}
