import { products as productData } from '../../data/products'

const initialState = {
	productss: productData,
	selected: null,
}

const ProductReducer = (state = initialState, action) => {
	// switch (action.type) {
	// 	case SELECT_PRODUCT:
	// 		const IndexCategory = state.products.findIndex(
	// 			(cat) => cat.id === action.categoryID
	// 		)

	// 		if (IndexCategory === -1) return state
	// 		return { ...state, selected: state.products[IndexCategory] }
	// 	default:
	return state
	// }
}

export default ProductReducer
