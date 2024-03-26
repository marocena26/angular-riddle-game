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

  playerPosition: { x: number, y: number } = { x: 0, y: 0 };

  board: string[][] = [
    ['🚪', '⬜️', '⬜️', '⬜️'],
    ['⬜️', '👻', '⬜️', '⬜️'],
    ['⬜️', '⬜️', '⬜️', '👻'],
    ['⬜️', '⬜️', '⬜️', '🍭']
  ];

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


  // Muestra el tablero en la consola
  showBoard(): void {
    for (let i = 0; i < this.board.length; i++) {
      let row = '';
      for (let j = 0; j < this.board[i].length; j++) {
        // Si la posición actual es la del jugador, muestra un marcador especial
        if (i === this.playerPosition.y && j === this.playerPosition.x) {
          row += '😎' + ' ';
        } else {
          row += this.board[i][j] + ' ';
        }
      }
      console.log(row);
    }
  }

  // Función para mover al jugador
  movePlayer(direction: string): void {
    let canMove = false;

    switch(direction) {
      case 'Norte':
        canMove = this.playerPosition.y > 0 && this.board[this.playerPosition.y - 1][this.playerPosition.x] !== '🚪';
        break;
      case 'Sur':
        canMove = this.playerPosition.y < this.board.length - 1 && this.board[this.playerPosition.y + 1][this.playerPosition.x] !== '🍭';
        break;
      case 'Este':
        canMove = this.playerPosition.x < this.board[0].length - 1 && this.board[this.playerPosition.y][this.playerPosition.x + 1] !== '🍭';
        break;
      case 'Oeste':
        canMove = this.playerPosition.x > 0 && this.board[this.playerPosition.y][this.playerPosition.x - 1] !== '🚪';
        break;
      default:
        console.log('Dirección no válida');
    }

    if (canMove) {
      switch(direction) {
        case 'Norte':
          this.playerPosition.y--;
          this.showBoard();
          break;
        case 'Sur':
          this.playerPosition.y++;
          this.showBoard();
          break;
        case 'Este':
          this.playerPosition.x++;
          this.showBoard();
          break;
        case 'Oeste':
          this.playerPosition.x--;
          this.showBoard();
          break;
      }
    }
  }


  canMove(direction: string): boolean {
    let canMove = false;

    switch(direction) {
      case 'Norte':
        canMove = this.playerPosition.y > 0 && this.board[this.playerPosition.y - 1][this.playerPosition.x] !== '🚪';
        break;
      case 'Sur':
        canMove = this.playerPosition.y < this.board.length - 1 && this.board[this.playerPosition.y + 1][this.playerPosition.x] !== '🍭';
        break;
      case 'Este':
        canMove = this.playerPosition.x < this.board[0].length - 1 && this.board[this.playerPosition.y][this.playerPosition.x + 1] !== '🍭';
        break;
      case 'Oeste':
        canMove = this.playerPosition.x > 0 && this.board[this.playerPosition.y][this.playerPosition.x - 1] !== '🚪';
        break;
      default:
        console.log('Dirección no válida');
    }

    return canMove;
  }


  // Función para obtener el emoji correspondiente a la posición actual del jugador
  getPlayerEmoji(): string {
    return this.board[this.playerPosition.y][this.playerPosition.x];
  }

  //Comprobamos el índice de la pregunta actual
  getCurrentQuestion(): QuestionsAndAnswers {
    return this.questions[this.currentIndex];
  }

  //Comprobamos si la respues es correcta o incorrecta
  checkAnswer(): void {
    const currentQuestion = this.getCurrentQuestion();
    if (
      this.userAnswer.trim().toLowerCase() ===
      currentQuestion.answers.toLowerCase()
    ) {
      if (this.currentIndex < this.questions.length - 1) {
        this.currentIndex++;
      } else {
        this.responseMessage = '¡Has completado todas las preguntas! Toma una 🍭';
        this.userAnswer = '';
        return;
      }
      this.userAnswer = '';
      this.responseMessage = '';
    } else {
      this.responseMessage = 'Respuesta incorrecta. Inténtalo de nuevo.';
    }
  }
}
