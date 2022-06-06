import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';

import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root',
})
export class CartGuard implements CanActivate {
  constructor(private cartService: CartService, private router: Router) {}

  canActivate(): boolean {

    return this.cartService.available ? true : false;
  }

  
}