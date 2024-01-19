import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { GameComponent } from '../game/game.component';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrl: './game-page.component.scss'
})
export class GamePageComponent {
  testedWords: String[] = [];
  
  @ViewChild(GameComponent) game!: GameComponent;

  constructor(){ }
  
  validate(input: HTMLInputElement) {
    let word = input.value.toLocaleLowerCase();

    if(this.testedWords.indexOf(word) == -1){
      this.testedWords.push(word);
    }
    input.value = '';

    this.game.tryWord(word);
  }
}
