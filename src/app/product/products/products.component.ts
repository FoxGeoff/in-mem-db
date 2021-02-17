import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/data/interface/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts()
      .subscribe(
        (data: Product[]) => {
          console.log(data);
          this.products = data;
        })
  }

  deleteProduct(id: number) {

  }

  updateProduct(id: number) {
    
  }
}
