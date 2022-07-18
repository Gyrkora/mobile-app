import { Modal, StyleSheet, Text, View, Button } from 'react-native'

export default function CustomModal(props) {
	const {
		modalVisible,
		itemSelected,
		onHandlerDeleteItem,
		onHanlderCloseModal,
	} = props

	return (
		<Modal animationType="slide" transparent={true} visible={modalVisible}>
			<View style={styles.modal}>
				<View style={styles.modalView}>
					<View></View>
					<View style={styles.modalMessage}>
						<Text style={styles.modalQuestion}>Eliminar</Text>
					</View>
					<View style={styles.modalMessage}>
						<Text style={styles.modalItem}>{itemSelected.value}</Text>
					</View>
					<View style={styles.modalButtonContainer}>
						<View style={styles.button}>
							<Button
								onPress={() => onHandlerDeleteItem(itemSelected.id)}
								title="Confirmar"
								color={'#1154B3'}
							/>
						</View>
						<View style={styles.button}>
							<Button
								onPress={onHanlderCloseModal}
								title="   Cerrar   "
								color={'#CC5D12'}
							/>
						</View>
					</View>
				</View>
			</View>
		</Modal>
	)
}

const styles = StyleSheet.create({
	modal: {
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		borderWidth: 2,
		borderRadius: 20,
		backgroundColor: 'white',
		height: 40,
		margin: '8%',
		borderColor: '#B35719',
		flex: 1,
		backgroundColor: '#EBC298',
	},

	modalView: {
		width: '80%',
		height: '50%',
		borderRadius: 10,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
	},
	modalMessage: {
		marginBottom: 10,
		justifyContent: 'center',
		alignItems: 'center',
	},
	modalButtonContainer: {
		margin: 15,
		flexDirection: 'row',
	},

	modalQuestion: {
		fontSize: 25,
		textAlign: 'center',
		color: '#1154B3',
		fontWeight: 'bold',
		marginBottom: 10,
	},
	modalItem: {
		fontSize: 30,
		color: '#B35719',
	},

	button: {
		margin: 10,
		borderRadius: 20,
	},
})
