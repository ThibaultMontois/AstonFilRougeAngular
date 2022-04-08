import { ComponentFixture, TestBed } from '@angular/core/testing';

import { teamcardsComponent } from './team-cards.component';

describe('teamcardsComponent', () => {
  let component: teamcardsComponent;
  let fixture: ComponentFixture<teamcardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ teamcardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(teamcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
