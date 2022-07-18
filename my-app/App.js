import { StyleSheet, View, Text } from 'react-native'
import CustomModal from './components/Modal'
import InputAddItem from './components/InputAddItem'
import List from './components/List'
import { useState } from 'react'

export default function App() {
	const [textItem, setTextItem] = useState('')
	const [definition, setDefinition] = useState('')
	const [itemList, setItemList] = useState([])
	const [modalVisible, setModalVisible] = useState(false)
	const [itemSelected, setItemSelected] = useState({})

	const onHandlerChangeItem = (text) => setTextItem(text)
	const onHanlderChangeDef = (def) => setDefinition(def)
	const onHanlderAddItem = () => {
		setItemList((currentItems) => [
			...currentItems,
			{ id: itemList.length + 1, value: textItem, definition: definition },
		])
		setTextItem('')
		setDefinition('')
	}

	const onHandlerDeleteItem = (id) => {
		setItemList((currItems) => currItems.filter((item) => item.id !== id))
		setItemSelected({})
		setModalVisible(!modalVisible)
	}

	const onHanlderCloseModal = () => {
		setModalVisible(!modalVisible)
	}

	const onHandlerModal = (id) => {
		setItemSelected(itemList.find((item) => item.id === id))
		setModalVisible(!modalVisible)
	}

	return (
		<View style={styles.screen}>
			<CustomModal
				modalVisible={modalVisible}
				itemSelected={itemSelected}
				onHandlerDeleteItem={onHandlerDeleteItem}
				onHanlderCloseModal={onHanlderCloseModal}
			/>
			<Text style={styles.title}> 🇩🇪 Wörterbuch 📕 </Text>
			<InputAddItem
				textItem={textItem}
				onHandlerChangeItem={onHandlerChangeItem}
				onHanlderAddItem={onHanlderAddItem}
				onHanlderChangeDef={onHanlderChangeDef}
				definition={definition}
			/>

			<List
				itemList={itemList}
				onHandlerModal={onHandlerModal}
				definition={definition}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	screen: {
		padding: 20,
		justifyContent: 'space-between',
		flexDirection: 'column',
		// backgroundColor: '#FFD2A6',
	},
	title: {
		fontSize: 30,
		fontWeight: 'bold',
		paddingBottom: 10,
		color: '#1154B3',
		marginTop: 40,
		textAlign: 'center',
	},
})
