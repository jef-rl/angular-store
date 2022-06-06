import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { Product } from '../products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
  });

  constructor(
    private router: Router,
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}

  get items() {
    return this.cartService.getItems();
  }
 
  ngOnInit(): void {}

  removeFromCart(item: Product) {
    this.cartService.removeFromCart(item);
    if(!this.cartService.getItems().length ) {
      this.router.navigate(['../']);
    }
  }
  onSubmit(): void {
    // Process checkout data here
    this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
    this.router.navigate(['../']);
  }
}
