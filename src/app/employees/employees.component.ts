import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees :any = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadEmployees();
  }

  loadEmployees() {
    this.http.get<any[]>('http://localhost:3000/employees')
      .subscribe(data => {
        this.employees = data;
      });
  }

  openAddEmployeeModal() {
    // Open a modal or navigate to another page to add a new employee
  }

  editEmployee(emp: any) {
    console.log('Edit employee:', emp);
  }

  deleteEmployee(id: number) {
    this.http.delete(`http://localhost:3000/employees/${id}`)
      .subscribe(() => {
        this.employees = this.employees.filter((emp: { id: number; }) => emp.id !== id);
      });
  }
}
