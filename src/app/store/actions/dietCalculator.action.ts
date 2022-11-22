import { createAction, props } from '@ngrx/store';
import { IProductModel } from '../../models/productModel'

export const setProductAction = createAction(
    '[DietCalCutator] Set product to state',
    props<{ payload: IProductModel[] }>()
);

export const addNewProductAction = createAction(
    '[DietCalCutator] Add new product to state',
    props<{ payload: IProductModel }>()
);