import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';

import { Course } from '../../models/course';
import { Courseservices } from '../../services/courseservices';

@Component({
  selector: 'app-edit-course',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-course.html',
  styleUrls: ['./edit-course.css']
})
export class EditCourse implements OnInit {

  course: Course = new Course();

  constructor(
    private route: ActivatedRoute,
    private service: Courseservices,
    private router: Router
  ) {}

  ngOnInit(): void {

    const id = Number(this.route.snapshot.params['id']);

    this.service.getCourseById(id)
      .subscribe((data: Course) => {

        this.course = data;

      });

  }

  updateCourse() {

    const id = Number(this.route.snapshot.params['id']);

    this.service.updateCourse(id, this.course)
      .subscribe(() => {

        this.router.navigate(['/courses']);

      });

  }

}