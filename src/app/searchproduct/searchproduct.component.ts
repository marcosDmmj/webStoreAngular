import {Component, OnInit} from '@angular/core';
import {Product} from '../product';
import {DataService} from '../data.service';

@Component({
  selector: 'app-searchproduct',
  templateUrl: './searchproduct.component.html',
  styleUrls: ['./searchproduct.component.css']
})
export class SearchproductComponent implements OnInit {
  id: number;
  products: Product[];
  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  private searchProducts() {
    this.dataService.getProductsById(this.id).then(products => this.products = products);
  }

  onSubmit() {
    this.searchProducts();
  }

}
