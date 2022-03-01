import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Produit } from '../Modele/produit';
import { Observable } from 'rxjs';

const httpOptions =
{
  //les donnees seront sous forme de JSON 

  headers: new HttpHeaders({ 'Content-Type': 'application/json' })

}

@Injectable({
  providedIn: 'root'
  
})
export class ProductService {

  produits: Produit[];

 private readonly apiUrl= 'http://localhost:8181/api/v1/';

  constructor(private http: HttpClient) {
  }

  //Lobservable est un canal qui se connecte sur le 
  //serveur pour faciliter tout acces sur la bd 

  listProduit(): Observable<Produit[]> {

 return this.http.get<Produit[]>(this.apiUrl +'/rechercheToutProduits');

}
  consulterProduitById(id: number): Observable<Produit> 
  {
   
    
    return this.http.get<Produit>(this.apiUrl + 'rechercheProduit/' +id)

  }

   addProduit(produit: Produit): Observable<Produit> {

    return this.http.post<Produit>(this.apiUrl +'ajoutProduit' , produit, httpOptions)

  }

  deleteProduitById(id: number) 
  {
    return this.http.delete(this.apiUrl+'supprimerProduit/'+ id, httpOptions);

  }

  updateProduit(produit: Produit): Observable<Produit> 
  {


    return this.http.put<Produit>(this.apiUrl+'modifierProduit' , produit, httpOptions)

  }
}