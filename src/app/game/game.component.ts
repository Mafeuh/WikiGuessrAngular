import { Component, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ParagraphComponent } from '../paragraph/paragraph.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent implements OnInit {
  pageTitle!: String;
  paragraphs!: String[];

  @ViewChildren(ParagraphComponent) paragChildren!: QueryList<ParagraphComponent>
  
  constructor(){ }

  ngOnInit(): void {
    this.paragraphs = [
      "Lorem Ipsum Dolor Sit Amet",
      "Sit Dolor Amet Lorem Ipsum",
      "Lorem Sit Amet Ipsum Dolor"
    ]
  }
  
  tryWord(word:String):void {
    this.paragChildren.forEach(parag => {
      parag.tryWord(word);
    })
  }
}