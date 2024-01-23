import { Component, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ParagraphComponent } from '../paragraph/paragraph.component';
import { WordComponent } from '../word/word.component';
import { WikiLoader } from '../tools/wiki-loader';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent implements OnInit {
  pageTitle!: string;
  paragraphs!: string;
  wikiLoader!: WikiLoader

  @ViewChildren(ParagraphComponent) paragChildren!: QueryList<ParagraphComponent>;
  @ViewChildren(WordComponent) titleWords!: QueryList<WordComponent>;

  constructor() { }
  
  ngOnInit(): void {
    this.wikiLoader = new WikiLoader();
    var dataFetch = this.wikiLoader.get_page();

    dataFetch.then(response => {
        // Check if the response status is OK (200-299)
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        return response.json();
    }).then(response => {
      this.pageTitle = response.title;
      this.paragraphs = response.paragraphs;
      console.log(response);
      
      console.log(this.pageTitle);
      console.log(this.paragraphs);
      
    });

  }

  isWon(): boolean {
    var res = true;
    this.titleWords.forEach(w => {
      if(w.hidden) res = false;
    })
    return res;
  }

  splitInput(sentence: string): string[] {
    var resp = sentence.split(/(\p{L}+|\S)/gu).filter(function(item) {
      return item.length > 0;
    })
    console.log(resp);
    
    return resp;
  }
  
  isPunctuation(word: string): boolean {
    // Customize the regular expression based on your definition of punctuation
    const punctuationRegex = /^[ !@#$%^&*(),.?":{}|<>\-']+$/;
    return punctuationRegex.test(word);
  }
  
  tryWord(wordToTry:String):void {
    this.titleWords.forEach(word => {
      word.tryWord(wordToTry);
    })

    this.paragChildren.forEach(parag => {
      parag.tryWord(wordToTry);
    })
  }
}