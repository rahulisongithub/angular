import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse,HttpHeaders } from '@angular/common/http';
import {Headers,RequestOptions,RequestMethod} from '@angular/http';
import { IProduct } from './product';
import { Observable, throwError } from "rxjs";
import { map,catchError,tap} from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class ProductService {

    //private productUrl = 'http://localhost/api/products/';
    //private productUrl = 'http://localhost:49951/api/products/';
   private productUrl='https://myrsawebapi.azurewebsites.net/api/products/';


    constructor(private http:HttpClient){
    }

    getProducts(): Observable<IProduct[]> {
      
       return this.http.get<IProduct[]>(this.productUrl)
            .pipe(
                tap(data => JSON.stringify(data)),
                catchError(this.handleError)
            );  
    }
    
    getProduct(id:number):Observable<IProduct> {
        return this.http.get<IProduct>(this.productUrl + id)
          .pipe(catchError(this.handleError))
    }

    saveProduct(product) {
          console.log("Product to be added is " + product);
        let options = { headers: new HttpHeaders({'Content-Type': 'application/json'})};
        return this.http.post<IProduct>(this.productUrl, product, options)
          .pipe(catchError(this.handleError))
    }

    updateProduct(product:IProduct):Observable<IProduct>{
        let options = { headers: new HttpHeaders({'Content-Type': 'application/json'})};
        return this.http.put<IProduct>(this.productUrl + product.productId,product,options)
        .pipe(catchError(this.handleError))
    }

    deleteProduct(id:number):Observable<IProduct>{
        let options = { headers: new HttpHeaders({'Content-Type': 'application/json'})};
        return this.http.delete<IProduct>(this.productUrl + id,options)
        .pipe(catchError(this.handleError))
    }

    private handleError(err:HttpErrorResponse){
        let errorMessage = '';
        if(err.error instanceof ErrorEvent){
            errorMessage = `Ann Error occurred:${err.status},err message is : ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }

}