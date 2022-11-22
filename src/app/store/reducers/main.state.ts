import { ActionReducerMap } from '@ngrx/store';
import { createDietCalculatorReducer } from './dietCalculator.reducer'
import { ICalculatorModel } from '../../models/productModel'

export interface State {
    dietCalculator: ICalculatorModel
}

export const reducers: ActionReducerMap<State> = {
    dietCalculator: createDietCalculatorReducer
}