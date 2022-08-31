import { createStore, combineReducers } from 'redux'

import ProductReducer from './reducers/shop.reducer'

const RootReducer = combineReducers({
	products: ProductReducer,
})

export default createStore(RootReducer)