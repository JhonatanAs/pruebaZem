import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../models/item';
@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  url:string = 'https://datos.gob.es/apidata/catalog/distribution';
  private local_items : Item[];
  
  constructor(private http: HttpClient) { }

  
  get_data_url():Observable<any>{
    
    let data = this.http.get(this.url);
    
    return data;
  }
  addItem(item:Item):boolean{
    this.local_items.push(item);
    return true;
  }
  set_local_items(items:Item[]){
    this.local_items=items;
  }
  get_local_items(){
    return this.local_items;
  }
}
