# InMemDb

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.1.

## Project Online Refs

1. Ref. <https://www.techiediaries.com/angular-inmemory-web-api/>
2. Ref. <https://github.com/angular/in-memory-web-api>
3. NOTE Always import the HttpClientInMemoryWebApiModule after the HttpClientModule to ensure that the in-memory backend provider supersedes the Angular version.
4. NOTE You can setup the in-memory web api within a lazy loaded feature module by calling the .forFeature method as you would .forRoot.
5. NOTE In production, you want HTTP requests to go to the real server and probably have no need for the in-memory provider. CLI-based apps can exclude the provider in production builds like this:

```Typescript
imports: [
  HttpClientModule,
  environment.production ?
    [] : HttpClientInMemoryWebApiModule.forRoot(DataService)
  ...
]
```

1. TSLint issues <https://stackoverflow.com/questions/65228384/tslint-extension-throwing-errors-in-my-angular-application-running-in-visual-stu>

### Task: Set up the angular-in-memory-web-api module

1. Run ```npm install --save angular-in-memory-web-api```
2. Run ```ng g s data```

```Typescript
import { Injectable } from '@angular/core';

import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';


@Injectable()
export class DataService implements InMemoryDbService {

  constructor() { }
  createDb(reqInfo?: RequestInfo): {} | Observable<{}> | Promise<{}> {
    throw new Error('Method not implemented.');
  }
}
```

### Task: Import the in-memory web api module

1. Mock an HttpClient REST API with a delayed responce

```Typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// in-memmory-db
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './data.service';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(DataService, {delay: 1000})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### Task: Add seed data

### Task: Add CRUD methods for products

### Task: Add Update method for products

```TypeScript
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
```
