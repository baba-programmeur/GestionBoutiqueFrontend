import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './Category/add-category/add-category.component';
import { AddProduitComponent } from './produit/add-produit/add-produit.component';
import { ProduitComponent } from './produit/produit.component';
import { UpdateProduitComponent } from './produit/update-produit/update-produit.component';

const routes: Routes = [
  
  { path: 'produits', component:ProduitComponent},
  { path: 'updateProduit/:id', component:UpdateProduitComponent},
  { path: 'addProduit', component:AddProduitComponent},
  {path:'categories',component:AddCategoryComponent},
 // {path:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
