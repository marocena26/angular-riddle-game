import { Component } from '@angular/core';
import { QuestionsAndAnswers } from 'src/app/interfaces/questionsAndAnswers';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  currentIndex: number = 0;
  userAnswer: string = '';
  responseMessage: string = '';

  questions: QuestionsAndAnswers[] = [
    {
      question:
        '¿Qué lenguaje de programación fue creado por Guido van Rossum?',
      answers: 'Python',
    },

    {
      question: '¿Cuál es el sistema operativo de código abierto más popular?',
      answers: 'Linux',
    },
  ];


  //Comprobamos el índice de la pregunta actual
  getCurrentQuestion(): QuestionsAndAnswers {
    return this.questions[this.currentIndex];
  }


  //Comprobamos si la respues es correcta o incorrecta
  checkAnswer(): void {
    const currentQuestion = this.getCurrentQuestion();
    if (this.userAnswer.trim().toLowerCase() === currentQuestion.answers.toLowerCase()) {
      this.currentIndex++;
      this.userAnswer = '';
      this.responseMessage = '';
    } else {

      this.responseMessage = 'Respuesta incorrecta. Inténtalo de nuevo.';    }
  }

}
