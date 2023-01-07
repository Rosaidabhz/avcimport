import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WhatsappService {
  url: string= 'https://api.whatsapp.com/send?phone=51912346852&text=Buen dia';
  lb: string= '%0A';

  constructor() {}

  skipLine(sentence: string){
    const urlBase = 'https://api.whatsapp.com/send?phone=51912346852&text=Buen dia';
     this.url=urlBase+this.lb+sentence+this.lb;
  }
  
  contact(product: string):string{
    this.skipLine('Estoy interesado/a en estos productos'+' '+product+' ');
    return this.url

  }
   
}