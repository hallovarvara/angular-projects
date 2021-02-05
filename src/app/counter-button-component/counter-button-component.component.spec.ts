import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterButtonComponentComponent } from './counter-button-component.component';

describe('CounterButtonComponentComponent', () => {
  let component: CounterButtonComponentComponent;
  let fixture: ComponentFixture<CounterButtonComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterButtonComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterButtonComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
