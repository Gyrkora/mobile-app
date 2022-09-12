import { Ionicons } from '@expo/vector-icons'
import { Text, Pressable, StyleSheet } from 'react-native'
import colors from '../constants/colors'

const OutlinedButton = ({ onPress, icon, children }) => {
	return (
		<Pressable
			style={({ pressed }) => [styles.button, pressed && styles.pressed]}
			onPress={onPress}
		>
			<Ionicons style={styles.icon} name={icon} size={18} color={colors.blue} />
			<Text style={styles.text}>{children}</Text>
		</Pressable>
	)
}

const styles = StyleSheet.create({
	button: {
		paddingHorizontal: 12,
		paddingVertical: 6,
		margin: 4,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 1,
		borderColor: colors.pink,
	},

	pressed: {
		opacity: 0.7,
	},

	icon: {
		marginRight: 6,
	},

	text: {
		color: colors.pink,
	},
})

export default OutlinedButton
