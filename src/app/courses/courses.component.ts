import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CourseService} from "../course.service";
import {Course} from "../course";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Planet} from "../../../../../7_week/Planets/src/app/planet";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  
  courses: Course[];
  course: Course;

  constructor(
      private route: ActivatedRoute,
      private courseService: CourseService
  ) { }
  
  getCourses() {

      this.courseService.getCourses().subscribe(data => this.courses = data);
  }

  onSelect(c: Course): void {
      //this.courseService.getCourse(c.code).subscribe(data => data[0]);
      this.courseService.getCourse(c.code).subscribe(data => this.course = data);
      //this.getCourse(c.code);
      //this.course = this.courses[0];
    }

  onSubmit() {
      alert('Success');
  }

  ngOnInit() {
      this.getCourses();
  }

}
