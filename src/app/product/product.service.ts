import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { map, filter, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Product } from '../data/interface/product';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productesUrl: string = "api/products";

  constructor(private http: HttpClient) { }

  public getProducts() {
    return this.http.get(this.productesUrl);
  }

  public getProduct(productId) {
    return this.http.get(`${this.productesUrl}/${productId}`);
  }
  public createProduct(product: Product) {
    return this.http.post(`${this.productesUrl}`, product)
  }

  public deleteProduct(productId) {
    return this.http.delete(`${this.productesUrl}/${productId}`)
  }

  /** PUT: update the product on the server. Returns the updated product upon success. */
  public updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(this.productesUrl, product, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }

}
