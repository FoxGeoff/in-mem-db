import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private SERVER_URL: string = "api/products";

  constructor(private httpClient: HttpClient) { }

  public getProducts() {
    return this.httpClient.get(this.SERVER_URL);
  }

  public getProduct(productId) {
    return this.httpClient.get(`${this.SERVER_URL }/${productId}`);
  }
  public createProduct(product: { id: number, amount: number, clientId: number, userId: number, description: string }) {
    return this.httpClient.post(`${this.SERVER_URL }`, product)
  }

  public deleteProduct(productId) {
    return this.httpClient.delete(`${this.SERVER_URL }/${productId}`)
  }
  public updateProduct(product: { id: number, amount: number, clientId: number, userId: number, description: string }) {
    return this.httpClient.put(`${this.SERVER_URL }/${product.id}`, product)
  }
}
