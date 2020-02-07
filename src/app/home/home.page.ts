import { Component, OnInit } from '@angular/core';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { AlertController, NavController } from '@ionic/angular';
import { ProductProvider } from '../providers/product-provider/product.provider';
import { NavParamsProvider } from '../providers/nav-params/nav-params.provider';
import { LocalStorageProvider } from '../providers/local-storage/local-storage.provider';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public scanning = false;
  public products: any[];

  constructor(
    private readonly qrScanner: QRScanner,
    private readonly alertController: AlertController,
    private readonly productProvider: ProductProvider,
    private readonly navParamsProvider: NavParamsProvider,
    private readonly navController: NavController,
    private readonly localStorageProvider: LocalStorageProvider
  ) {}

  ngOnInit() {
    this.products = this.localStorageProvider.getItem('products');
  }

  public scanQR(): void {
    this.qrScanner.prepare()
      .then((status: QRScannerStatus) => {
        if (status.authorized) {
          this.scanning = true;
          this.qrScanner.show();
          const scan = this.qrScanner.scan()
            .subscribe((qrCode: string) => {
              this.scanning = false;
              this.qrScanner.hide();
              this.loadProduct(qrCode);
              scan.unsubscribe();
          });
        } else if (status.denied) {
          this.askPermissions();
        } else {
          this.askPermissions();
        }
      })
      .catch(() => this.askPermissions());
  }

  public cancelQR(): void {
    this.scanning = false;
    this.qrScanner.hide();
  }

  public openDetail(product: any): void {
    this.navParamsProvider.params = product;
    this.navController.navigateForward('/details');
  }

  public logout(): void {
    this.navController.navigateRoot('login');
  }

  private async askPermissions() {
    const alert = await this.alertController.create({
      header: '¡Permiso denegado!',
      message: 'Debe conceder permisos de acceso a la cámara para poder user el lector de códigos QR',
      buttons: [
        {
          text: 'Rechazar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            alert.dismiss();
          }
        }, {
          text: 'Aceptar',
          handler: () => {
            this.qrScanner.openSettings();
          }
        }
      ]
    });

    alert.present();
  }

  private loadProduct(code: string): void {
    this.productProvider.loadProduct(code)
      .subscribe((product: any) => {
        this.navParamsProvider.params = product;
        this.setItemInMemory(product);
        this.navController.navigateForward('/details');
      });
  }

  private setItemInMemory(product: any): void {
    let products: any[] = this.localStorageProvider.getItem('products');
    let itemExists = false;

    if (products) {
      products.forEach((productElement: any) => {
        if (productElement.id === product.id) {
          itemExists = true;
        }
      });
    } else {
      products = [product];
    }

    if (!itemExists) {
      products.push(product);
      this.localStorageProvider.setItem('products', products);
    }
  }

}
