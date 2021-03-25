import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { API_URL_SLIDER, IMAGE_URL_PRODUCT, API_URL } from '../providers/constant.service';
import { AlertController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  product_detail : any;
  constructor(
    public http: HttpClient,
  ) { }

  get_product_detail(id_pro){
    var promise = new Promise((resolve, reject) => {
      this.http.post(API_URL + 'api_get_product_detail', {
          id_pro : id_pro,
      })
      .subscribe(hasil => {
        console.log('product detail result', hasil);
        resolve(hasil);
      });      
    });
    return promise;    
  }
}
