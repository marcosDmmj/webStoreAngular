import {Product} from '../product';
import {DataService} from '../data.service';
import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-create-product',
  templateUrl: './createproduct.component.html',
  styleUrls: ['./createproduct.component.css']
})

export class CreateproductComponent implements OnInit {
  product = new Product;
  submitted = false;
  constructor(private dataService: DataService,
    private location: Location) {}

  ngOnInit() {
  }

  newProduct(): void {
    this.submitted = false;
    this.product = new Product();
  }

  private save(): void {
    this.dataService.create(this.product);
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  goBack(): void {
    this.location.back();
  }
}
