import { Component, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ParagraphComponent } from '../paragraph/paragraph.component';
import { WordComponent } from '../word/word.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent implements OnInit {
  pageTitle!: string;
  paragraphs!: string[];

  @ViewChildren(ParagraphComponent) paragChildren!: QueryList<ParagraphComponent>;
  @ViewChildren(WordComponent) titleWords!: QueryList<WordComponent>;

  constructor(){ }
  
  ngOnInit(): void {
    this.pageTitle = "Étienne Laclotte".normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    this.paragraphs = [
      "Étienne Laclotte (1728-1812) est un architecte bordelais2. Avec ses frères, Michel et Jean, il forme une société exerçant les professions d’architecte et entrepreneur, qui aura une place dominante dans la deuxième moitié du XVIIIe siècle parmi la corporation des maîtres maçons de Bordeaux3. ".normalize("NFD").replace(/[\u0300-\u036f]/g, ""),
    ]
  }

  isWon(): boolean {
    var res = true;
    this.titleWords.forEach(w => {
      if(w.hidden) res = false;
    })
    return res;
  }


  splitInput(sentence: string): string[] {
    return sentence.split(/(\b|\W)/).filter(function(item) {
      return item.length > 0;
    })
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