import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import validate = WebAssembly.validate;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'checkout-page';
  checkoutFormGroup: FormGroup;
  countries: string[] = ['Poland', 'German', 'France'];
  @ViewChild('select') selectEl: ElementRef;

  ngOnInit(): void {
    this.checkoutFormGroup = new FormGroup({
      contactInformation: new FormGroup({
        email: new FormControl(null, [Validators.required]),
        phone: new FormControl(null, [Validators.required])
      }),
      shippingAddress: new FormGroup({
        fullName: new FormControl(null, [Validators.required]),
        address: new FormControl(null, [Validators.required]),
        city: new FormControl(null, [Validators.required]),
        country: new FormControl(null, [Validators.required]),
        postalCode: new FormControl(null, [Validators.required]),
      }),
    });
  }
  onSubmit(): void {
    console.log(this.checkoutFormGroup);
    alert(!this.checkoutFormGroup.invalid ? 'form is valid' : 'form is invalid!');
  }

  changeColor(): void{
    this.selectEl.nativeElement.style.color = 'black';
    this.selectEl.nativeElement.style.fontSize = '12px';

  }
}
