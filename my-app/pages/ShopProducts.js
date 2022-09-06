import { useEffect } from 'react'
import { FlatList } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import ShopItems from '../components/shopGame/ShopItems'
import { filteredProduct, selectProduct } from '../store/actions/product.action'

const ShopProducts = () => {
	const dispatch = useDispatch()
	const selectedCategory = useSelector(
		(store) => store.products.filteredProduct
	)
	const category = useSelector((store) => store.shopCategory.selected)

	const handleSelected = (item) => {
		dispatch(selectProduct(item.id))
	}

	useEffect(() => {
		dispatch(filteredProduct(category.id))
	}, [])

	const renderItemProd = ({ item }) => (
		<ShopItems item={item} onSelected={handleSelected} />
	)

	return (
		<FlatList
			data={selectedCategory}
			keyExtractor={(item) => item.id}
			renderItem={renderItemProd}
			numColumns={2}
		/>
	)
}

export default ShopProducts
