import { createSelector } from '@ngrx/store';
import { State } from '../reducers/main.state'
import { ICalculatorModel } from '../../models/productModel'

export const getAllProductsSelector = (state: State) => state.dietCalculator;