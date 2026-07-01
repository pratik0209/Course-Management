import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'http://localhost:8080/api/auth/login';

  constructor(private http: HttpClient) {}

  login(data:any){
    return this.http.post(this.url,data);
  }

}