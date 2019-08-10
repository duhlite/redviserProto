import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-program',
  templateUrl: './about-program.component.html',
  styleUrls: ['./about-program.component.scss']
})
export class AboutProgramComponent implements OnInit {
  guidelines = [
    " To release and redeem coupons you should physically be inside the corresponding store and allow location access for the internet-connect device that you bring with you to the store.",
    "	The released coupons are valid during 1 (one) hour after you released them. Time is calculated by our server and not always exactly matched to time on other devices.",
    " To redeem coupons you should hand your device to the cashier to scan your customer barcode and the coupon barcodes.",
    "	The promotional products, offered via Redviser platform, are available while the stock lasts and are not guaranteed during the entire promotional period.",
    " Coupons are void if altered or unlawfully reproduced.",
    " Each coupon can be used only one time.",
    " Redviser keeps rights to revoke any issued promotions at any time with or without any reasons."
  ]

  constructor() { }

  ngOnInit() {
  }

}
