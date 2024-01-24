import { Component, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ParagraphComponent } from '../paragraph/paragraph.component';
import { WordComponent } from '../word/word.component';
import { WikiLoader } from '../tools/wiki-loader';
import { GlobalMethods } from '../tools/global-methods';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent implements OnInit {
  pageTitle!: string;
  paragraphs!: string;
  pageUrl!: string;

  //TODO: Change back to false when finished
  isGameOver: boolean = true;

  wikiLoader!: WikiLoader;

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
      this.pageUrl = response.url;

      console.log(response);
    });
  }

  isPunctuation(word: string): boolean {
    // Customize the regular expression based on your definition of punctuation
    const punctuationRegex = /^[ !@#$%^&*(),.?":{}|<>\-']+$/;
    return punctuationRegex.test(word);
  }

  checkGameState() {
    var res = true;
    this.titleWords.forEach(wordComp => {
      if(wordComp.hidden) res = false;
    })
    this.isGameOver = res;
  }
  
  tryWord(wordToTry:String):void {
    this.titleWords.forEach(word => {
      word.tryWord(wordToTry);
    });

    this.paragChildren.forEach(parag => {
      parag.tryWord(wordToTry);
    });

    this.checkGameState();
  }

  splitInput(input: string): string[] {
    return GlobalMethods.splitInput(input);
  }
}