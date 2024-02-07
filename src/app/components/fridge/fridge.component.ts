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

  constructor(public fridgeApi:ApiService) {}

  ngOnInit(){
    this.fridgeApi.getApi(this.api).subscribe({
      next: res => {this.fridge = res, console.log(this.fridge)},
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

    this.fridgeApi.postApi(add, this.api).subscribe({
      next: res => {
        this.fridge.push(res.ingredient), console.log(res.ingredient)},
      error: err => {console.log(err)}
    });
  }

  deleteProduct(i: any){
    let id: string = i._id;

    this.fridgeApi.deleteApi(id, this.api).subscribe({
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