import { Component, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { WordComponent } from '../word/word.component';

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrl: './paragraph.component.scss'
})
export class ParagraphComponent {
  @Input('paragraph') paragraph!: String;

  @ViewChildren(WordComponent) words!: QueryList<WordComponent>;

  tryWord(word: String):void {
    this.words.forEach(wordComp => {
      wordComp.tryWord(word);
    })
  }
}
