import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-qna',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './qna.component.html',
  styleUrls: ['./qna.component.css']
})
export class QnaComponent {
  question: string = '';
  answer: string = '';
  isLoading: boolean = false;

  constructor(private http: HttpClient) {}

  askQuestion() {
    if (this.question.trim() === '') {
      return;
    }

    this.isLoading = true;

    this.http.post<any>('http://127.0.0.1:8000/api/qna/', { query: this.question }).subscribe(
      response => {
        this.isLoading = false;
        this.answer = response.answer;
      },
      error => {
        console.error('Error:', error);
        this.isLoading = false;
        this.answer = 'Sorry, there was an error processing your request.';

      }
    );
  }
}
