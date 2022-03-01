import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/Modele/produit';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

produits:Produit[];

produit:Produit;

  constructor(private serviceProduit:ProductService) { }

  ngOnInit(): void {

    this.serviceProduit.listProduit().subscribe(prod =>
   { 
     console.log(prod) ;
     
     this.produits=prod
   }
);
  }
  supprimerProduit(id:number)
  {
        
 let confirmation= confirm("Etes-Vous sur de bien vouloir supprimer");
     
     if(confirmation)

        this.serviceProduit.deleteProduitById(id).subscribe(() =>
    {
      
       } );
     
  }

}
