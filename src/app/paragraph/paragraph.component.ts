import { Component, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { WordComponent } from '../word/word.component';

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

  splitInput(sentence: string): string[] {
    return sentence.split(/[0-9]+|(\p{L}+|\S|)/gu).filter(function(item) {
      return item.length > 0;
    })
  }
  
  @ViewChildren(WordComponent) words!: QueryList<WordComponent>;
  
  tryWord(word: String):void {
    this.words.forEach(wordComp => {
      wordComp.tryWord(word);
    })
  }
}