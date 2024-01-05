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

  constructor(public dessertApi:ApiService) {}

  ngOnInit(){
    this.dessertApi.getApi(this.api).subscribe({
      next: res => {this.dessert = res},
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

    this.dessertApi.postApi(add, this.api).subscribe({
      next: res => {
        this.dessert.push(res.ingredient)},
      error: err => {console.log(err)}
    });
  }

  deleteProduct(i: any){
    console.log(i._id);

  }
}