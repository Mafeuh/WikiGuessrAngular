import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplayerGameButtonComponent } from './multiplayer-game-button.component';

describe('MultiplayerGameButtonComponent', () => {
  let component: MultiplayerGameButtonComponent;
  let fixture: ComponentFixture<MultiplayerGameButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MultiplayerGameButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MultiplayerGameButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
