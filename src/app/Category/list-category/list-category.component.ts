import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Category } from 'src/app/Modele/category';
import { CategoryService } from 'src/app/Services/category.service';
import { AddCategoryComponent } from '../add-category/add-category.component';
@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {

  categorie : Category;
  control: FormControl = new FormControl('');
 p: number = 1;

 constructor(public crudApi:CategoryService,public toastr:ToastrService,
    
  private router : Router,public fb: FormBuilder,

    private matDialog: MatDialog,
    
    @Inject(MAT_DIALOG_DATA)
    
    public data: any,

  @Optional() public dialogRef:MatDialogRef<ListCategoryComponent>,) { }
 
    ngOnInit() {
    
      this.getData();
    }
    
    addCategorie()
    {
      //creation d'un objet de type MatDialog
      const dialogConfig = new MatDialogConfig();
      dialogConfig.autoFocus = true;
      dialogConfig.disableClose = true;
      dialogConfig.width="50%";
      dialogConfig.height="60%";
      //dialogConfig.data="gdddd";
      this.matDialog.open(AddCategoryComponent, dialogConfig);

    //  this.dialogRef.close(this.fb.control);

    }
    getData() {
     this.crudApi.getAll().subscribe(response =>
      {this.crudApi.list = response;}

       );
     
    }
    removeData(id: number) {
      if (window.confirm('Etes-Vous sur de vouloir supprimer cette categorie ?')) {
      this.crudApi.deleteData(id)
        .subscribe(
          data => {
            console.log(data);
            this.toastr.warning(' La categorie a été bien supprimé'); 
            this.getData();
          },
          error => console.log(error));
    }
    }
    selectData(item : Category) {
      this.crudApi.choixmenu = "M";
      this.crudApi.dataForm = this.fb.group(Object.assign({},item));
      const dialogConfig = new MatDialogConfig();
      dialogConfig.autoFocus = true;
      dialogConfig.disableClose = true;
      dialogConfig.width="50%";
      this.matDialog.open(AddCategoryComponent, dialogConfig);
      //this.router.navigate(['/category']);
    }

    close()
    {
      this.dialogRef.close();
    }
}
