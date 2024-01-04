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

  constructor(public mainCoursesApi:ApiService) {}

  ngOnInit(){
    this.mainCoursesApi.getApi(this.api).subscribe({
      next: res => {this.mainCourses = res, console.log(this.mainCourses)},
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

    this.mainCoursesApi.postApi(add, this.api).subscribe({
      next: res => {
        this.mainCourses.push(res.ingredient), console.log(res.ingredient)},
      error: err => {console.log(err)}
    });
  }
}
