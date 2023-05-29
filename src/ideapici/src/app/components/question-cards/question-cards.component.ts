import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { Question } from 'src/app/pages/questions-page/questions-page.component';
import { QuestionsService } from 'src/app/services/questions.service';


@Component({
  selector: 'app-question-cards',
  templateUrl: './question-cards.component.html',
  styleUrls: ['./question-cards.component.css']
})
export class QuestionCardsComponent {

  // qs: Subject<Question[]>;
  // const question: Question = new Question();
  // const questionJson = JSON.stringify(question);

  // localStorage.setItem('question', questionJson);

  // this.router.navigate(['/destination']);

  responses = [
    {id: '1', value: '5400'},
    {id: '2', value: '7200'},
    {id: '3', value: '10000'}
  ]
  
  // constructor(private questionsservice:QuestionsService) {}

  // private getQuestion() {
  //   this.questionsservice.loadQuestionsForm("/assets/JSON/questions.json").subscribe((questionsToDisplay : Question[]) => {
  //     qs = questionsToDisplay;
  //   })
  // }

  
}



