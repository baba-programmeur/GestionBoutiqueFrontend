import { CATCH_STACK_VAR } from '@angular/compiler/src/output/output_ast';
import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { filter, map } from 'rxjs';
import { Category } from 'src/app/Modele/category';
import { CategoryService } from 'src/app/Services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class ListeCategoryComponent implements OnInit {

    newCategory:Category=new Category();


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  constructor(private categoryService:CategoryService)
  {

  }

addCategorie()
{

return this.categoryService.addCategory(this.newCategory).pipe(
   
)

}

}
