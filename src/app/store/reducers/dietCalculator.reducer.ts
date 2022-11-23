import { Action, createReducer, on } from '@ngrx/store';
import { DietCalculatorAction } from '../actions/index'
import { ICalculatorModel, IProductModel } from '../../models/productModel'


export const initialState: ICalculatorModel = {
    products: [
        {
            name: "siema",
            protein: 2,
            fat: 3,
            carbo: 3,
        },
        {
            name: "siema",
            protein: 2,
            fat: 3,
            carbo: 3,
        }
    ]
};

const dietCalculatorReducer = createReducer(
    initialState,
    on(DietCalculatorAction.setProductAction, (state, { payload }) => ({
        products: payload
    })),
    on(DietCalculatorAction.addNewProductAction, (state, { payload }) => ({
        products: [
            ...state.products, 
            payload
        ]
    }))
)

export function createDietCalculatorReducer(testState: ICalculatorModel | undefined , action: Action) {
    return dietCalculatorReducer(testState, action)
}
