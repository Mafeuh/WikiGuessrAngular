import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { GameComponent } from '../game/game.component';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrl: './game-page.component.scss'
})
export class GamePageComponent {
  testedWords: TestedWord[] = [];
  
  @ViewChild(GameComponent) game!: GameComponent;

  constructor(){ }
  
  lastGuessedWord(): string {
    if(this.testedWords.length == 0) return '';
    return this.testedWords[this.testedWords.length - 1].word;
  }

  validate(input: HTMLInputElement) {
    let word = input.value.toLocaleLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    if(!this.wordAlreadyGuessed(word)){
      this.testedWords.push(new TestedWord(word, 0));
    }
    input.value = '';

    this.game.tryWord(word);
  }

  wordAlreadyGuessed(word: string): boolean {
    var res = false;
    this.testedWords.forEach(tested => {
      if(tested.word === word) res = true;
    });
    return res;
  }
}

class TestedWord {
  constructor(
    public word: string,
    public amount: number
  ){ }
}
