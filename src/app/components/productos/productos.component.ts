import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';
import { products } from '../products';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
})
export class ProductosComponent implements OnInit{
  products=products;
  allProducts = products;
    
  selectedCategory: string = '';
 

  constructor(private cart:ServicesService) {
    
  }
  
  ngOnInit(): void {}


  addToCart(product: { id: number; name: string; price: number; weight: string; image: string; amount: number; subtotal: number;   }) {
  this.cart.addToCart(product);
  window.alert('Producto agregado al carrito: ' + product.name)
}

filterProducts() {
  if (this.selectedCategory === '') {
    this.products = this.allProducts;
  } else {
    this.products = this.allProducts.filter(product => product.category === this.selectedCategory);
  }
}

}