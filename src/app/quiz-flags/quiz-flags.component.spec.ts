import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizFlagsComponent } from './quiz-flags.component';

describe('QuizFlagsComponent', () => {
  let component: QuizFlagsComponent;
  let fixture: ComponentFixture<QuizFlagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizFlagsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuizFlagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
