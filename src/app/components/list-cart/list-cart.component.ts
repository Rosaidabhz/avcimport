import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';
import { WhatsappService } from 'src/app/services/whatsapp.service';


@Component({
  selector: 'app-list-cart',
  templateUrl: './list-cart.component.html',
  styleUrls: ['./list-cart.component.scss']
})
export class ListCartComponent implements OnInit{

  
  items:{ id: number; name: string; price: number; weight: string; image: string; amount: number; subtotal: number   }[]=[];
  totalPrice: number = 0;
  constructor (public cart:ServicesService, private wpService: WhatsappService, ) {}

  ngOnInit(): void {
    this.items=this.cart.CartList();
    this.totalPrice = this.cart.totalPrice();
  }

  
  deleteProduct(product: { price: number; amount: number; subtotal: number  }) {
    product.amount--;
    product.subtotal = product.price * product.amount;
    if (product.amount === 0) {
      this.items = this.items.filter((item) => item !== product);

      let message = '';
      this.items.forEach(item => {
        message += `- ${item.name} x${item.amount} = ${item.subtotal}\n`;
      });
      message += `Total: ${this.totalPrice}`;

      //llamada del servicio de wp
      this.wpService.contact(message)}
   }

   sendWhatsapp() {
     let message = '';
     this.items.forEach(item => {
     message += `- ${item.name} x${item.amount} (${item.weight}) = ${item.subtotal}\n`;
      });

       message += `Total: ${this.totalPrice}`;


       const url = this.wpService.contact(message);
       console.log(url);
       window.open(url, '_blank');
   }

   removeProduct(product: { id: number; }) {
     this.items = this.items.filter((item) => item.id !== product.id);
     this.totalPrice = this.cart.totalPrice();
   }
}