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

    this.productService.deleteProduct(id).subscribe((ret) => {
      console.log("Product deleted: ", ret);
    })
  }

  updateProduct(product: Product) {

    // because we are using interface instead of class
    let newProduct = <Product>
      <unknown>{
        id: product.id,
        productName: 'test name',
        productCode: 123,
        description: "a new product description",
        price: 12.33,
        categoryId: 345,
        quantityInStock: 5,
        supplierIds: [123, 456]
      } as Product;

    this.productService.updateProduct(newProduct).subscribe((ret) => {
      console.log("Product updated: ", ret);
    });
  }
}
