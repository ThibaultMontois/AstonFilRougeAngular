import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachCardsComponent } from './coach-cards.component';

describe('CoachCardsComponent', () => {
  let component: CoachCardsComponent;
  let fixture: ComponentFixture<CoachCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoachCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
