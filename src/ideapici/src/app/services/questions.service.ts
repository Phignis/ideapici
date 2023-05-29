import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private http: HttpClient) { }

  public loadQuestionsForm(pathToFile : string) : Subject<Questions> {
    let sub = new Subject<Questions>;
    this.http.get<Questions>(pathToFile).subscribe((listQuestions: Questions) => {
      console.log(listQuestions);
      sub.next(listQuestions);
      
    })
    return sub;
  }


// additionals_questions.questions-portable.quest-setSuiteProperty.forEach(element => {
//   console.log(element);
// });
}

export interface Question {
  question : string;
  reponses : string[];
  additionals_questions : any;
}

export interface Questions {
  listQuestions : string[];
}
