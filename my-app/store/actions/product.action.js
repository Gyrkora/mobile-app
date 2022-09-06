export const SELECT_PRODUCT = 'SELECT_PRODUCT'
export const FILTERED_PROD = 'FILTERED_PROD'

export const selectProduct = (id) => ({
	type: SELECT_PRODUCT,
	prodID: id,
})

export const filteredProduct = (id) => ({
	type: FILTERED_PROD,
	categoryID: id,
})
