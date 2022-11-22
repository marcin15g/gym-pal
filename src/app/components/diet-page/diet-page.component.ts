import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { State } from '../../store/reducers/main.state'

import * as DietCalculatorSelector from '../../store/selectors/dietCalculator.selectors'

@Component({
  selector: 'app-diet-page',
  templateUrl: './diet-page.component.html',
  styleUrls: ['./diet-page.component.scss']
})
export class DietPageComponent implements OnInit {

  constructor(
    private store: Store<State>
  ) { }

  ngOnInit(): void {
  }

  test(){
    this.store.select(DietCalculatorSelector.getAllProductSelector).subscribe( res => {
      console.table(res.products)
    })
  }

}
