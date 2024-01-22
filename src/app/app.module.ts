import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasePageComponent } from './base-page/base-page.component';
import { HomeComponent } from './home/home.component';
import { RulesComponent } from './rules/rules.component';
import { RulesPageComponent } from './rules-page/rules-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SoloGameButtonComponent } from './solo-game-button/solo-game-button.component';
import { MultiplayerGameButtonComponent } from './multiplayer-game-button/multiplayer-game-button.component';
import { GameComponent } from './game/game.component';
import { GamePageComponent } from './game-page/game-page.component';
import { WordComponent } from './word/word.component';
import { ParagraphComponent } from './paragraph/paragraph.component';

@NgModule({
  declarations: [
    AppComponent,
    BasePageComponent,
    HomeComponent,
    RulesComponent,
    RulesPageComponent,
    NavBarComponent,
    SoloGameButtonComponent,
    MultiplayerGameButtonComponent,
    GameComponent,
    GamePageComponent,
    WordComponent,
    ParagraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
