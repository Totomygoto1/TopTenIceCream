import { Component } from '@angular/core';
import { HttpService } from './services/http.service';
import { Product } from './_interfaces/product.model';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public products: Product[];
 
  constructor(private httpService: HttpService){}
 
    public getProducts = () => {
      let route: string = 'http://localhost:5000/api/product';
      this.httpService.getData(route)
      .subscribe((result) => {
        this.products = result as Product[];
      },
      (error) => {
        console.error(error);
      });  
  }
 }
 
