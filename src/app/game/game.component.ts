import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss',
})
export class GameComponent {
  pickCardAnimation = false;

  trackByIndex(index: number, item: any): number {
    return index;
  }

  takeCard() {
    this.pickCardAnimation = true;
  }
}
