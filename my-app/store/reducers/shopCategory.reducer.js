import { shopCategories as categories } from '../../data/shopCategories'
import { SELECT_CATEGORY } from '../actions/shopCategory.action'

const initialState = {
	shopCategories: categories,
	selected: null,
}

const ShopCategoryReducer = (state = initialState, action) => {
	switch (action.type) {
		case SELECT_CATEGORY:
			const IndexCategory = state.shopCategories.findIndex(
				(cat) => cat.id === action.categoryID
			)

			if (IndexCategory === -1) return state
			return { ...state, selected: state.shopCategories[IndexCategory] }
		default:
			return state
	}
}

export default ShopCategoryReducer
