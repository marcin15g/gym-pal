import { createSelector } from '@ngrx/store';
import { State } from '../reducers/main.state'
import { ICalculatorModel } from '../../models/productModel'

export const getAllProductSelector = (state: State) => state.dietCalculator;