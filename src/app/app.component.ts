import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'checkout-page';
  checkoutFormGroup: FormGroup;

  ngOnInit(): void {
    this.checkoutFormGroup = new FormGroup({
      contactInformation: new FormGroup({
        email: new FormControl(),
        phone: new FormControl()
      }),
      shippingAddress: new FormGroup({
        fullName: new FormControl(),
        address: new FormControl(),
        city: new FormControl(),
        country: new FormControl(),
        postalCode: new FormControl(),
        saveForNextTime: new FormControl()
      }),
    });
  }

  onSubmit(): void {
    console.log(this.checkoutFormGroup);
  }
}
