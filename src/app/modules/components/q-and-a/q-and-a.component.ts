import { Component, OnInit } from '@angular/core';
import { QuestionsAndAnswers } from 'src/app/interfaces/questionsAndAnswers';

@Component({
  selector: 'q-and-a',
  templateUrl: './q-and-a.component.html',
  styleUrls: ['./q-and-a.component.scss'],
})
export class QAndAComponent implements OnInit {

  currentQuestionIndex: number = 0;
  currentQuestion!: QuestionsAndAnswers;
  userInput: string = '';
  isCorrect: boolean = false;
  showError: boolean = false;

  ngOnInit(): void {
    this.showNextQuestion();
  }

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
    {
      question: '¿Qué compañía desarrolló el sistema operativo Windows?',
      answers: 'Microsoft',
    },
    {
      question:
        '¿Qué lenguaje de programación se utiliza principalmente para el desarrollo web del lado del cliente?',
      answers: 'JavaScript',
    },
    {
      question:
        '¿Cuál es el protocolo estándar para enviar correos electrónicos?',
      answers: 'SMTP',
    },
    {
      question: '¿Qué significa HTML?',
      answers: 'HyperText Markup Language',
    },
    {
      question:
        '¿Cuál es la base de datos relacional de código abierto más popular?',
      answers: 'MySQL',
    },
    {
      question: '¿Qué significa URL?',
      answers: 'Uniform Resource Locator',
    },
    {
      question: '¿Qué compañía desarrolló el lenguaje de programación Java?',
      answers: 'Sun',
    },
    {
      question: '¿Qué estructura de datos es LIFO?',
      answers: 'Pila',
    },
    {
      question:
        '¿Qué lenguaje de programación fue diseñado por Bjarne Stroustrup?',
      answers: 'C++',
    },
    {
      question: '¿Qué significa HTTP?',
      answers: 'HyperText Transfer Protocol',
    },
    {
      question: '¿Qué significa SQL?',
      answers: 'Structured Query Language',
    },
    {
      question: 'Cuál es el lenguaje de hojas de estilo utilizado en la web',
      answers: 'CSS',
    },
    {
      question: '¿Qué significa API?',
      answers: 'Application Programming Interface',
    },
    {
      question: '¿Qué estructura de datos es FIFO?',
      answers: 'Cola',
    },
    {
      question: 'Cuál es el lenguaje de programación más antiguo aún en uso',
      answers: 'Fortran',
    },
    {
      question: '¿Qué significa IDE?',
      answers: 'Integrated Development Environment',
    },
    {
      question: '¿Qué compañía es la creadora del sistema operativo macOS?',
      answers: 'Apple',
    },
    {
      question:
        '¿Qué lenguaje se utiliza comúnmente para el desarrollo de aplicaciones Android?',
      answers: 'Kotlin',
    },
  ];

  showNextQuestion(): void {
    this.currentQuestion = this.questions[this.currentQuestionIndex];
    this.userInput = '';
    this.isCorrect = false;
    this.showError = false;
  }

  checkAnswer(): void {
    if (
      this.userInput.trim().toLowerCase() ===
      this.currentQuestion.answers.toLowerCase()
    ) {
      this.isCorrect = true;
      setTimeout(() => {
        this.currentQuestionIndex++;
        if (this.currentQuestionIndex < this.questions.length) {
          this.showNextQuestion();
        } else {
          console.log('¡Has respondido todas las preguntas correctamente!');
        }
      });
    } else {
      this.showError = true;
    }
  }
}
