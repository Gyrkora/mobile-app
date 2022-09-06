import { createStore, combineReducers, applyMiddleware } from 'redux'
import CartReducer from './reducers/cart.reducer'

import ProductReducer from './reducers/shop.reducer'
import ShopCategoryReducer from './reducers/shopCategory.reducer'
import thunk from 'redux-thunk'

const RootReducer = combineReducers({
	products: ProductReducer,
	shopCategory: ShopCategoryReducer,
	cart: CartReducer,
})

export default createStore(RootReducer, applyMiddleware(thunk))
