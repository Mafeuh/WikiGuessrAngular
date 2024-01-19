import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrl: './game-page.component.scss'
})
export class GamePageComponent implements AfterViewInit {
  testedWords: String[] = [];
  
  constructor(){ }
  
  validate(input: HTMLInputElement) {
    let word = input.value.toLocaleLowerCase();

    if(this.testedWords.indexOf(word) == -1){
      this.testedWords.push(word);
    }
    input.value = '';
  }

  ngAfterViewInit(): void {
  }
}
