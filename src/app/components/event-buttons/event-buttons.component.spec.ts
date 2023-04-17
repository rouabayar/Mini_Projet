import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventButtonsComponent } from './event-buttons.component';

describe('EventButtonsComponent', () => {
  let component: EventButtonsComponent;
  let fixture: ComponentFixture<EventButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventButtonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
