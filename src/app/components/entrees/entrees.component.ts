import { Component } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-entrees',
  templateUrl: './entrees.component.html',
  styleUrls: ['./entrees.component.css']
})
export class EntreesComponent {
  clean: boolean = true;
  entrees: any;
  api: string = "/entrees";

  constructor(public entreesApi:ApiService) {}

  ngOnInit(){
    this.entreesApi.getApi(this.api).subscribe({
      next: res => {this.entrees = res, console.log(this.entrees), this.clean = false},
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
}
