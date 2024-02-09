import { Component } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-entrees',
  templateUrl: './entrees.component.html',
  styleUrls: ['./entrees.component.css']
})
export class EntreesComponent {
  entrees: any;
  api: string = "/entrees";
  isOpen: boolean = false;
  isClose: boolean = true;

  constructor(public entreesApi:ApiService) {}

  ngOnInit(){
    this.entreesApi.getApi(this.api).subscribe({
      next: res => {this.entrees = res, console.log(this.entrees)},
      error: err => {alert("Cargar fallo" + err);}
    });
  }

  addProduct(ingredient: any, description: any) {
    let add: object = {
      ingredient: ingredient.value,
      description:  description.value,
      gluten: "false",
      lactose: "false"
    };

    this.entreesApi.postApi(add, this.api).subscribe({
      next: res => {
        this.entrees.push(res.ingredient), console.log(res.ingredient)},
      error: err => {alert("Añadir fallo" + err);}
    });
  }

  deleteProduct(i: any){
    let id: string = i._id;

    this.entreesApi.deleteApi(id, this.api).subscribe({
      next: res => {
        console.log(res);
        this.ngOnInit();
      },
      error: err => {alert("Borrar fallo" + err);}
    });
  }

  updateProduct(product: any, description: any, ingredient: any){
    let entree: object = {
      product: product.value,
      description: description.value,
      editId: ingredient._id
    }
      this.entreesApi.editApi(entree, this.api).subscribe({
        next: res => {
          this.ngOnInit();
          this.isOpen = false;
          this.isClose = true;
        },
        error: err => {alert("Editar fallo" + err);}
      });
  }

  openEdit(){
    this.isOpen = true;
    this.isClose = false;
  }

  closeEdit(){
    this.isOpen = false;
    this.isClose = true;
  }
}
