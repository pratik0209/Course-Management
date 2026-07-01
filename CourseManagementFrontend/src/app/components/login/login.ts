import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {

  username = '';
  password = '';

  constructor(private router: Router) {}

  login() {

    if (
      this.username === 'admin' &&
      this.password === 'admin123'
    ) {

      alert('Login Successful');

      this.router.navigate(['/dashboard']);

    } else {

      alert('Invalid Credentials');

    }
  }
}