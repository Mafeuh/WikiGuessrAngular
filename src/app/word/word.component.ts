import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrl: './word.component.scss'
})
export class WordComponent implements OnInit {
  hidden: boolean = true;
  @Input('word') word!: String;
  
  ngOnInit(): void {
    
  }

  switchState():void {
    this.hidden = !this.hidden;  
  }
}
