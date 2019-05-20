import { Component, OnInit, QueryList } from '@angular/core';
import { IQuiz } from 'src/models/quiz-model';
import { quiz } from 'src/Data/quiz-data';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  quizList: IQuiz[] = quiz;
  currentQuestion : IQuiz;
  textbutton: string = "next";
  disabledbutton: boolean = false;
  questionId: number;
  finalMark: number = 0;
  isShowMark: boolean = false;

  constructor(private rouat: ActivatedRoute, private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit() {
    this.questionId = +this.rouat.snapshot.paramMap.get('id');
    this.currentQuestion = this.quizList.find(x => x.id === this.questionId);
    if (this.currentQuestion.id == this.quizList.length)
      this.textbutton = "done";
    if (this.currentQuestion.id == 1)
      this.disabledbutton = true;

  }
  prevClick() {
    let prevId = this.questionId - 1;
    this.router.navigate([`/qustion/${prevId}`])
  }
  nextClick() {
    if (this.textbutton == "done")
      this.getMark();
    else {
      let nextId = this.questionId + 1;
      this.router.navigate([`/qustion/${nextId}`])
    }
  }

  getMark() {
    for (let i = 0; i < this.quizList.length; i++) {
      if (this.quizList[i]['userAnswer'] == this.quizList[i]['rightAnswer'])
        this.finalMark += 20;
    }
    this.isShowMark = true;
  }
}
