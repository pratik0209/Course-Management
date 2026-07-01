import { Component } from '@angular/core';
import {  RouterOutlet } from '@angular/router';
import{RouterLink} from '@angular/router';
@Component({
  selector: 'app-navbar',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

}
