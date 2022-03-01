import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';

import { Category } from '../Modele/category';



@Injectable({
  providedIn: 'root'
})
	
export class CategoryService {
  
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  private apiUrl ='http://localhost:8181/api/v1' ;

  choixmenu : string  = 'A';

  list : Category[];

  tokenStr = localStorage.getItem('token');

  public dataForm:FormGroup; 

  constructor(private http: HttpClient) { }

  getData(id: number): Observable<Object> {
    
     return this.http.get(this.apiUrl+ '/rechercheCategory' +id,{ headers: { authorization: this.tokenStr } });
  }
 /*
  createData(category: Category): Observable<Object> {

    return this.http.post(this.apiUrl+'/ajoutCategory', category) //{ headers: { authorization: this.tokenStr } });
  }
  */
  addCategory(category: Category): Observable<Category>
   {

   return this.http.post<Category>(this.apiUrl +'/ajoutCategory',category)
  
  }

  updatedata(id: number, value: any): Observable<Object> {

    return this.http.put(this.apiUrl+'/modifierCategory', value,{ headers: { authorization: this.tokenStr } });
  }
 
  deleteData(id: number): Observable<any> {
   
    return this.http.delete(this.apiUrl +'/supprimerCategory/'+id,{ responseType: 'text', headers: { authorization: this.tokenStr } });
  }

  getAll(): Observable<Category> {   
  
    return this.http.get<Category>(this.apiUrl+'/rechercheToutCategory',{ headers: { authorization: this.tokenStr } });
  
  }

  deleteAllCategories():Observable<any>
  {
    return this.http.delete(this.apiUrl+'/deleteAllCategory')

  }
}
