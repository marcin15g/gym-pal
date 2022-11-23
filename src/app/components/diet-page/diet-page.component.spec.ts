import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { AppStoreMock } from '../../utils/mocks/store/app-store.mock'

import { DietPageComponent } from './diet-page.component';

describe('DietPageComponent', () => {
  let component: DietPageComponent;
  let fixture: ComponentFixture<DietPageComponent>;
  const initialState = AppStoreMock.appStateMock

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DietPageComponent ],
      providers: [
        provideMockStore({ initialState }),
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DietPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
