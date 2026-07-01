import { Injectable } from '@angular/core';
import { Course } from '../models/course';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class Courseservices 
{

 private url = "http://localhost:8080/api/courses";

  constructor(private http: HttpClient) { }

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.url);
  }

  addCourse(course: Course) {
    return this.http.post(this.url, course);
  }

getAllCourses():Observable<Course[]>
{
return this.http.get<Course[]>(this.url);
}

saveCourse(course:Course)
{
return this.http.post(this.url,course);
}

getCourseById(id:number)
{
return this.http.get<Course>(`${this.url}/${id}`);
}

updateCourse(id:number,course:Course)
{
return this.http.put(`${this.url}/${id}`,course);
}

deleteCourse(id:number)
{
return this.http.delete(`${this.url}/${id}`);
}

}