import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { DataService } from '../data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[];
  selectedProduct: Product;

  constructor(private dataService: DataService) { }

  getProducts() {
     this.dataService.getProducts().then(products => this.products = products);
  }

  ngOnInit() {
    this.getProducts();
  }

  onSelect(product: Product): void {
    this.selectedProduct = product;
  }
}
