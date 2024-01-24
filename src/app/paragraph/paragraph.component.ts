import { Component, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { WordComponent } from '../word/word.component';
import { GlobalMethods } from '../tools/global-methods';

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrl: './paragraph.component.scss'
})
export class ParagraphComponent {
  @Input('paragraph') paragraph!: string;

  str_words!:string[];
  isPunctuation(word: string): boolean {
    // Customize the regular expression based on your definition of punctuation
    const punctuationRegex = /^[ !@#$%^&*(),.?":{}|<>\-']+$/;
    return punctuationRegex.test(word);
  }

  splitInput(word: string): string[]{
    return GlobalMethods.splitInput(word);
  }
  
  @ViewChildren(WordComponent) words!: QueryList<WordComponent>;
  
  tryWord(word: String):void {
    this.words.forEach(wordComp => {
      wordComp.tryWord(word);
    })
  }
}