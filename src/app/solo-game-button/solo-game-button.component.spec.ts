import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoloGameButtonComponent } from './solo-game-button.component';

describe('SoloGameButtonComponent', () => {
  let component: SoloGameButtonComponent;
  let fixture: ComponentFixture<SoloGameButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SoloGameButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SoloGameButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
