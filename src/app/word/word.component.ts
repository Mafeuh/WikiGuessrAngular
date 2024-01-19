import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrl: './word.component.scss'
})
export class WordComponent {
  hidden: boolean = true;
  @Input('word') word!: String;
  
  tryWord(word:String):void {
    if(this.hidden && this.word.toLocaleLowerCase() == word.toLocaleLowerCase()){
      this.hidden = false;
    }
  }
}
