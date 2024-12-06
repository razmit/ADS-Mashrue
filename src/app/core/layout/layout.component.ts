import { Component } from '@angular/core';
import {SidebarComponent} from '../sidebar/sidebar.component';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  imports: [
    SidebarComponent,
    RouterOutlet
  ],
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {}
