import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  products: any[] = [];
  isAscending: boolean = true; // toggle sort

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any>('https://dummyjson.com/products').subscribe(res => {
      this.products = res.products;
    });
  }
//sorting by prize
  sortByPrice() {
    if (this.isAscending) {
      this.products.sort((a, b) => a.price - b.price);
    } else {
      this.products.sort((a, b) => b.price - a.price);
    }
    this.isAscending = !this.isAscending;
  }

  viewMore(product: any) {
    alert(product.description);
  }

  updateProduct(product: any) {
    alert('Update clicked for: ' + product.title);
  }
}
