import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { Course } from '../../models/course';
import { Courseservices } from '../../services/courseservices';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './course-list.html',
  styleUrls: ['./course-list.css']
})
export class CourseList implements OnInit {

  courses: Course[] = [];

  constructor(private service: Courseservices) {}

  ngOnInit(): void {
    this.loadCourses();
  }

  loadCourses() {
    this.service.getCourses().subscribe({
      next: (data) => {
        this.courses = data;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  deleteCourse(id: number) {

    if(confirm('Delete this course?')) {

      this.service.deleteCourse(id).subscribe({

        next: () => {

          console.log('Deleted');

          this.loadCourses();

        },

        error: (err) => {

          console.log(err);

        }

      });

    }

  }

}