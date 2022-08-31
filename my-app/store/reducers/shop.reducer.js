import { products as productData } from '../../data/products'

const initialState = {
	productss: productData,
	selected: null,
}

const ProductReducer = (state = initialState, action) => {
	return state
}

export default ProductReducer
