import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovesCardComponent } from './moves-card.component';

describe('MovesCardComponent', () => {
  let component: MovesCardComponent;
  let fixture: ComponentFixture<MovesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovesCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
