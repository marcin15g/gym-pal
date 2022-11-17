import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraningPageComponent } from './traning-page.component';

describe('TraningPageComponent', () => {
  let component: TraningPageComponent;
  let fixture: ComponentFixture<TraningPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraningPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TraningPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
