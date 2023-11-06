import { Component } from '@angular/core';

@Component({
  selector: 'app-fridge',
  templateUrl: './fridge.component.html',
  styleUrls: ['./fridge.component.css']
})
export class FridgeComponent {

  clean: boolean = false;
  fridge: object[] =
    [
      { ingredient : "Pollo", description: "kilo"},
      { ingredient : "Conejo", description: "medio kilo"},
    ];

  constructor() {
    this.itsClean();
    console.log(this.fridge);
  }

  itsClean() {
    if (this.fridge.length === 0) {
      this.clean = true;
    };
  }

  addProduct(ingredient: any, description: any) {

    let product: string = ingredient.value;
    let details: string = description.value;

    this.fridge.push({ingredient: product, description: details});

    console.log(this.fridge);
  }

  show(ingredients: any){
    return ingredients.ingredient + " " + ingredients.description + "    " + "e" + "X"
  }
}