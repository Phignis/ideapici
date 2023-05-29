import { Component } from '@angular/core';

@Component({
  selector: 'app-questions-page',
  templateUrl: './questions-page.component.html',
  styleUrls: ['./questions-page.component.css']
})
export class QuestionsPageComponent {

}

export class Question{
  question: string;
  reponses: string[];
  rep_utilisateur:string;
  "questions-portable"?: QuestionPortable;

}

export class QuestionPortable{
  gp1 : Question;
  gp2 : Question;
  gp3 : Question;
}