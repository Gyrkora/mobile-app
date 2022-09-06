import { products as productData } from '../../data/products'
import { FILTERED_PROD, SELECT_PRODUCT } from '../actions/product.action'

const initialState = {
	products: productData,
	filteredProduct: [],
	selected: null,
}

const ProductReducer = (state = initialState, action) => {
	switch (action.type) {
		case SELECT_PRODUCT:
			return {
				...state,
				selected: state.products.find((prod) => prod.id === action.prodID),
			}
		case FILTERED_PROD:
			return {
				...state,
				filteredProduct: state.products.filter(
					(prod) => prod.category === action.categoryID
				),
			}
		default:
			return state
	}
}

export default ProductReducer
