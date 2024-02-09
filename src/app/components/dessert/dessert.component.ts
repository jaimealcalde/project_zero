import { Component } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';


@Component({
  selector: 'app-dessert',
  templateUrl: './dessert.component.html',
  styleUrls: ['./dessert.component.css']
})
export class DessertComponent {
  dessert: any;
  api: string = "/dessert";
  isOpen: boolean = false;
  isClose: boolean = true;

  constructor(public dessertApi:ApiService) {}

  ngOnInit(){
    this.dessertApi.getApi(this.api).subscribe({
      next: res => {this.dessert = res},
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

    this.dessertApi.postApi(add, this.api).subscribe({
      next: res => {
        this.dessert.push(res.ingredient)},
      error: err => {alert("Añadir fallo" + err);}
    });
  }

  deleteProduct(i: any){
    let id: string = i._id;

    this.dessertApi.deleteApi(id, this.api).subscribe({
      next: res => {
        console.log(res);
        this.ngOnInit();
      },
      error: err => {alert("Borrar fallo" + err);}
    });
  }

  updateProduct(product: any, description: any, ingredient:any){
    let dessert: object = {
      product: product.value,
      description: description.value,
      editId: ingredient._id
    }
      this.dessertApi.editApi(dessert, this.api).subscribe({
        next: res => {
          this.ngOnInit();
          this.isOpen = false;
          this.isClose = true;
        },
        error: err => {
          alert("Editar fallo" + err);
        }
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