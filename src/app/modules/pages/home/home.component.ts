import { Component } from '@angular/core';
import { Position } from 'src/app/interfaces/direction';

export enum Direction {
  North = 'norte',
  South = 'sur',
  East = 'este',
  West = 'oeste',
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  Direction = Direction;

  playerPosition: Position = { x: 0, y: 0 };

  hasDoor: boolean = true;
  hasCandy: boolean = false;

  mansion: string[][] = [
    ['🚪', '⬜️', '⬜️', '⬜️'],
    ['⬜️', '👻', '⬜️', '⬜️'],
    ['⬜️', '⬜️', '⬜️', '👻'],
    ['⬜️', '⬜️', '🍭', '⬜️'],
  ];

  ngOnInit(): void {
    this.hasDoor = true;
    this.updateAllowedDirections();
  }

  isMoveAllowed: { [key in Direction]: boolean } = {
    [Direction.North]: true,
    [Direction.South]: true,
    [Direction.East]: true,
    [Direction.West]: true,
  };

  movePlayer(direction: Direction): void {
    const newPosition = this.getNewPosition(direction);

    if (this.isValidPosition(newPosition)) {
      console.log(`Movimiento del jugador hacia ${direction}:`, newPosition);
      this.playerPosition = newPosition;
    }

    this.updateAllowedDirections();
  }

  private updateAllowedDirections(): void {
    const { x, y } = this.playerPosition;
    const maxX = this.mansion[0].length - 1;
    const maxY = this.mansion.length - 1;

    this.isMoveAllowed[Direction.North] = y > 0 && !(y === 1 && x === 0);
    this.isMoveAllowed[Direction.South] = y < maxY;
    this.isMoveAllowed[Direction.East] = x < maxX;
    this.isMoveAllowed[Direction.West] = x > 0 && !(x === 1 && y === 0);
  }

  private getNewPosition(direction: Direction): Position {
    const { x, y } = this.playerPosition;

    switch (direction) {
      case Direction.North:
        return { x, y: y - 1 };
      case Direction.South:
        return { x, y: y + 1 };
      case Direction.East:
        return { x: x + 1, y };
      case Direction.West:
        return { x: x - 1, y };
      default:
        return { x, y };
    }
  }

  private isValidPosition(position: Position): boolean {
    const { x, y } = position;
    return (
      x >= 0 && x < this.mansion[0].length && y >= 0 && y < this.mansion.length
    );
  }

  getCurrentRoom(): string {
    return this.mansion[this.playerPosition.y][this.playerPosition.x];
  }
}
