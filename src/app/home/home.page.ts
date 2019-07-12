import { Component } from '@angular/core';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  public scanning = false;

  constructor(
    private readonly qrScanner: QRScanner
  ) {}

  public scanQR(): void {
    this.qrScanner.prepare()
      .then((status: QRScannerStatus) => {
        if (status.authorized) {
          this.scanning = true;
          this.qrScanner.show();
          const scan = this.qrScanner.scan()
            .subscribe((text: string) => {
              this.scanning = false;
              this.qrScanner.hide();
              scan.unsubscribe();
          });
        } else if (status.denied) {
          // camera permission was permanently denied
          // you must use QRScanner.openSettings() method to guide the user to the settings page
          // then they can grant the permission from there
        } else {
          // permission was denied, but not permanently. You can ask for permission again at a later time.
        }
      })
      .catch((e: any) => alert(JSON.stringify(e)));
  }

  public cancelQR(): void {
    this.scanning = false;
    this.qrScanner.hide();
  }

}
