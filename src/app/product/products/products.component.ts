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
    // https://stackoverflow.com/questions/13142635/how-can-i-create-an-object-based-on-an-interface-file-definition-in-typescript
    // If you want an empty object of an interface, you can do just:
    let aProduct = <Product>{}

    const newProduct: Product = {
      id: product.id,
      productName: 'test name',
      productCode: '123',
      description: "a new product description",
      price: 12.33,
      categoryId: 345,
      quantityInStock: 5,
      supplierIds: [123, 456]
    }

    this.productService.updateProduct(newProduct).subscribe((ret) => {
      console.log("Product updated: ", ret);
    });
  }
}
