import { Routes } from '@angular/router';

import { Dashboard } from './components/dashboard/dashboard';
import { AddCourse } from './components/add-course/add-course';
import { CourseList } from './components/course-list/course-list';
import { EditCourse } from './components/edit-course/edit-course';
import { Login } from './components/login/login';


export const routes: Routes = [

  {
    path: '',
    component: Login
  },

  {
    path: 'dashboard',
    component: Dashboard
  },

  {
    path: 'add-course',
    component: AddCourse
  },

  {
    path: 'courses',
    component: CourseList
  },

  {
    path: 'edit-course/:id',
    component: EditCourse
  }

];