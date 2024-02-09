import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-fridge',
  templateUrl: './fridge.component.html',
  styleUrls: ['./fridge.component.css']
})
export class FridgeComponent {

  fridge: any;
  api: string = "/fridge";
  isOpen: boolean = false;
  isClose: boolean = true;

  constructor(public fridgeApi:ApiService) {}

  ngOnInit(){
    this.fridgeApi.getApi(this.api).subscribe({
      next: res => {this.fridge = res, console.log(this.fridge)},
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

    this.fridgeApi.postApi(add, this.api).subscribe({
      next: res => {
        this.fridge.push(res.ingredient), console.log(res.ingredient)},
      error: err => {alert("Añadir fallo" + err);}
    });
  }

  deleteProduct(i: any){
    let id: string = i._id;

    this.fridgeApi.deleteApi(id, this.api).subscribe({
      next: res => {
        console.log(res);
        this.ngOnInit();
      },
      error: err => {alert("Borrar fallo" + err);}
    });
  }

  updateProduct(product: any, description: any, ingredient: any){
    let fridge: object = {
      product: product.value,
      description: description.value,
      editId: ingredient._id
    }
      this.fridgeApi.editApi(fridge, this.api).subscribe({
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