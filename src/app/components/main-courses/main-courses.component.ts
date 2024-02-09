import { Component } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-main-courses',
  templateUrl: './main-courses.component.html',
  styleUrls: ['./main-courses.component.css']
})
export class MainCoursesComponent {

  mainCourses: any;
  api: string = "/mainCourses";
  isOpen: boolean = false;
  isClose: boolean = true;

  constructor(public mainCoursesApi:ApiService) {}

  ngOnInit(){
    this.mainCoursesApi.getApi(this.api).subscribe({
      next: res => {this.mainCourses = res, console.log(this.mainCourses)},
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

    this.mainCoursesApi.postApi(add, this.api).subscribe({
      next: res => {
        this.mainCourses.push(res.ingredient), console.log(res.ingredient)},
      error: err => {alert("Añadir fallo" + err);}
    });
  }

  deleteProduct(i: any){
    let id: string = i._id;

    this.mainCoursesApi.deleteApi(id, this.api).subscribe({
      next: res => {
        console.log(res);
        this.ngOnInit();
      },
      error: err => {alert("Borrar fallo" + err);}
    });
  }

  updateProduct(product: any, description: any, ingredient: any){
    let mainCourses: object = {
      product: product.value,
      description: description.value,
      editId: ingredient._id
    }
      this.mainCoursesApi.editApi(mainCourses, this.api).subscribe({
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
