import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-fridge',
  templateUrl: './fridge.component.html',
  styleUrls: ['./fridge.component.css']
})
export class FridgeComponent {

  clean: boolean = false;
  fridge: any;

  constructor(public fridgeApi:ApiService) {}

  ngOnInit(){
    this.fridgeApi.getApi().subscribe(
      (res) => {this.fridge = res, console.log(this.fridge)},
      (err) => {console.log(err)}
    );
  }

  addProduct(ingredient: any, description: any) {
    let add: object = {
      ingredient: ingredient.value,
      description:  description.value,
      gluten: "false",
      lactose: "false"
    }

    this.fridgeApi.postApi(add).subscribe(
      (res) => {
        this.fridge = res, console.log(res)},
      (err) => {console.log(err)}
    );
  }
}