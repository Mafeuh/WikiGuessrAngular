import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrl: './word.component.scss'
})
export class WordComponent {
  hidden: boolean = true;
  justRevealed: boolean = false;
  @Input('word') word!: String;
  
  tryWord(word:String):void {
    if(this.hidden && this.word.toLocaleLowerCase() == word.toLocaleLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")){
      this.hidden = false;
      this.justRevealed = true;
    } else {
      this.justRevealed = false;
    }
  }

  to_int(number: number): number {
    return Math.floor(number);
  }
}
