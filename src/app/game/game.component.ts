import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent implements OnInit {
  pageTitle!: String;
  paragraphs!: String[];

  sentence:String = "Lorem, ipsum dolor sit amet consectetur";
  
  constructor(){ }

  ngOnInit(): void {
    this.paragraphs = [
      "Lorem Ipsum Dolor? Sit, Amet",
      "adj. apodk, apodkz! ejae",
      "Troisième phrase pour tester"
    ]
  }
  
  tryWord():void {
    
  }
}