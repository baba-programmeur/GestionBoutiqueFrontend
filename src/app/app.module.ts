import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitComponent } from './produit/produit.component';
import { UpdateProduitComponent } from './produit/update-produit/update-produit.component';
import { AddProduitComponent } from './produit/add-produit/add-produit.component';
import { ToastrModule } from 'ngx-toastr';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatDialogModule} from "@angular/material/dialog";
import { ListCategoryComponent } from './Category/list-category/list-category.component';
@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent,
    UpdateProduitComponent,
    AddProduitComponent,
    ListCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
  BrowserAnimationsModule,
    MatDialogModule,
    ReactiveFormsModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
