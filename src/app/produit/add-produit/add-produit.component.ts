import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from 'src/app/Modele/produit';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent implements OnInit {

  constructor(private addService:ProductService,private route:ActivatedRoute,private router:Router) { }

  nouveauProduit:Produit =new Produit() ;

  ngOnInit(): void {
  }


  ajoutProduit()
  {
    this.addService.addProduit(this.nouveauProduit).subscribe(prod =>
          {console.log(prod)});

    this.router.navigate(['/produits']);

  }
}
