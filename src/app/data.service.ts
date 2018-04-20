import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Product } from './product';

@Injectable()
export class DataService {

  private productsUrl = 'product';  // URL to web API
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getProducts(): Promise<Product[]> {
    return this.http.get(this.productsUrl)
      .toPromise()
      .then(response => response.json() as Product[])
      .catch(this.handleError);
  }

getProductsById(id: number): Promise<Product[]> {
    const url = `findbyid/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Product)
      .catch(this.handleError);
  }

  create(product: Product): Promise<Product> {
    return this.http
      .post('postcustomer', JSON.stringify(product), {headers : this.headers})
      .toPromise()
      .then(res => res.json() as Product)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.productsUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Error', error);
    return Promise.reject(error.message || error);
  }
}
