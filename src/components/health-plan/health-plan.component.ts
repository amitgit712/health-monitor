import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-health-plan',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './health-plan.component.html',
  styleUrls: ['./health-plan.component.css']
})
export class HealthPlanComponent {
  userData = {
    age: '',
    weight: '',
    medical_history: '',
  };
  healthPlan: string = '';
  isLoading: boolean = false;

  constructor(private http: HttpClient) {}

  submitData() {
    if (!this.userData.age || !this.userData.weight) {
      alert('Please fill in all required fields.');
      return;
    }
    this.isLoading = true;
    this.http.post<any>('http://127.0.0.1:8000/api/health-plan/', this.userData).subscribe(
      response => {
        this.healthPlan = response.health_plan;
        this.isLoading = false;
      },
      error => {
        console.error('Error:', error);
        this.healthPlan = 'Sorry, there was an error processing your request.';
        this.isLoading = false;
      }
    );
  }
}
