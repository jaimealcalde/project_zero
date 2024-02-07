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

  constructor(public entreesApi:ApiService) {}

  ngOnInit(){
    this.entreesApi.getApi(this.api).subscribe({
      next: res => {this.entrees = res, console.log(this.entrees)},
      error: err => {console.log(err)}
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
      error: err => {console.log(err)}
    });
  }

  deleteProduct(i: any){
    let id: string = i._id;

    this.entreesApi.deleteApi(id, this.api).subscribe({
      next: res => {
        console.log(res);
        this.ngOnInit();
      },
      error: err => {console.log(err)}
    });
  }

  updateProduct(i: any){

    let id: string = i._id;
    console.log()
  }
}
