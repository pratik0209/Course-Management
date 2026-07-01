import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { Course } from '../../models/course';
import { Courseservices } from '../../services/courseservices';

@Component({
  selector: 'app-add-course',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-course.html',
  styleUrls: ['./add-course.css']
})
export class AddCourse {

  course: Course = new Course();

  constructor(
    private service: Courseservices,
    private router: Router
  ) {}

  saveCourse() {

    this.service.addCourse(this.course)
      .subscribe({
        next: (data) => {
          console.log(data);
          this.router.navigate(['/courses']);
        },

        error: (err) => {
          console.error(err);
        }
      });

  }

}