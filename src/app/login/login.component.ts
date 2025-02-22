import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html'
})
export class LoginComponent {
  constructor(private router: Router) {}

  enterApp() {
    this.router.navigate(['/dashboard']);
  }
}
