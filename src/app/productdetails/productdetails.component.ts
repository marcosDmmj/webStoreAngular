import { Component, Input } from '@angular/core';
import { Product } from '../product';
import { DataService } from '../data.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent {
 @Input() product: Product;

  constructor(private dataService: DataService) {}

  delete(): void {
    this.dataService.delete(this.product.id).then(() => this.goBack());
  }

  goBack(): void {
    window.location.replace('');
  }
}
