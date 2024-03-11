import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  apiUrl: string = "https://itemdb.com.br/api/v1/items/many";
  httpOptions:any;

  constructor(private http: HttpClient) { 
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }),
        observe: 'response'
    };
  }  
  
  public postItem(items:Item[]) { 
    let json = JSON.stringify({
          name: items
        });

    return this.http.post(this.apiUrl, json, this.httpOptions)
    .do(function (res: any) {
      if (res.status === 200) {
          const itemData = JSON.parse(res.responseText);
          // priceSDB(itemData);
      }
      else return console.error('[itemdb] Failed to fetch data', res);
    });
  }
  
}

  // GM_xmlhttpRequest({
  //   method: 'POST',
  //   url: 'https://itemdb.com.br/api/v1/items/many',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   data: JSON.stringify({
  //     name: mp
  //   }),
  //   onload: function (res) {
  //     if (res.status === 200) {
  //       const itemData = JSON.parse(res.responseText);
  //       // priceSDB(itemData);
  //     }

  //     else return console.error('[itemdb] Failed to fetch price data', res);
  //   }
  // });
// }