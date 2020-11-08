import { Component, OnInit } from '@angular/core';
import {ItemModel} from './item.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  shippingPrice: number = 19;
  total: number = 0;
  backPacks: ItemModel[] = [];
  shoes: ItemModel[] = [];

  constructor() { }

  ngOnInit(): void {
    this.backPacks.push({
      name: 'Vintage Backbag',
      price: 94.99,
      superPrice: 54.99
    });

    this.shoes.push({
      name: 'Levi Shoes',
      superPrice: 74.99,
      price: 124.99
    });
  }

  totalCost(): string{
    let backbagPrice: number = 0;
    this.backPacks.forEach(val => {
      backbagPrice += val.superPrice;
    });
    let shoesPrice: number = 0;
    this.shoes.forEach(val => {
      shoesPrice += val.superPrice;
    });
    return (this.total + this.shippingPrice + backbagPrice + shoesPrice ).toFixed(2);
  }

  onAddBackPack(): void{
    this.backPacks.push({
      name: 'Vintage Backbag',
      price: 94.99,
      superPrice: 54.99
    });
  }
  onAddShoes(): void{
    this.shoes.push({
      name: 'Levi Shoes',
      superPrice: 74.99,
      price: 124.99
    });
  }
  onRemoveBackPack(): void{
    this.backPacks.pop();
  }
  onRemoveShoes(): void{
    this.shoes.pop();
  }

}
