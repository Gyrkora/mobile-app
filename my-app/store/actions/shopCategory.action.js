export const SELECT_CATEGORY = 'SELECT_CATEGORY'

export const selectShopCategory = (id) => ({
	type: SELECT_CATEGORY,
	categoryID: id,
})
