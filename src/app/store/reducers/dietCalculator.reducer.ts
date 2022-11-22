import { Action, createReducer, on } from '@ngrx/store';
import { DietCalculatorAction } from '../actions/index'
import { ICalculatorModel, IProductModel } from '../../models/productModel'


export const initialState: ICalculatorModel = {
    product: []
};

const dietCalculatorReducer = createReducer(
    initialState,
    on(DietCalculatorAction.setProductAction, (state, { payload }) => ({
        product: payload
    })),
    on(DietCalculatorAction.addNewProductAction, (state, { payload }) => ({
        product: [
            ...state.product, 
            payload
        ]
    }))
)

export function createDietCalculatorReducer(testState: ICalculatorModel | undefined , action: Action) {
    return dietCalculatorReducer(testState, action)
}
