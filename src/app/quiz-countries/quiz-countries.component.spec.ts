import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizCountriesComponent } from './quiz-countries.component';

describe('QuizCountriesComponent', () => {
  let component: QuizCountriesComponent;
  let fixture: ComponentFixture<QuizCountriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizCountriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuizCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
