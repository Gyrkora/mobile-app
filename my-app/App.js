import { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import AddNumbers from './pages/AddNumbers'
import Worterbuch from './pages/Wörterbuch'
import colors from './constants/colors'
import MinusNumbers from './pages/MinusNumbers'
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'

export default function App() {
	const [loaded] = useFonts({
		EducBold: require('./assets/fonts/EduVICWANTBeginner-Bold.ttf'),
		EducMedium: require('./assets/fonts/EduVICWANTBeginner-Medium.ttf'),
		EducRegular: require('./assets/fonts/EduVICWANTBeginner-Regular.ttf'),
		EducSemibold: require('./assets/fonts/EduVICWANTBeginner-SemiBold.ttf'),
	})
	const [answer, setAnswer] = useState()
	let score = 0

	let content = (
		<AddNumbers setAnswer={setAnswer} answer={answer} score={score} />
	)

	if (answer) {
		score += 1
		content = (
			<MinusNumbers score={score} setAnswer={setAnswer} answer={answer} />
		)
	}

	if (!loaded) {
		return <AppLoading />
	}

	return (
		<View>
			<Text style={styles.header}>Practica matemáticas</Text>
			{content}
		</View>
	)
}

const styles = StyleSheet.create({
	header: {
		fontSize: 30,
		color: colors.beige,
		backgroundColor: colors.pink,
		textAlign: 'center',
		paddingTop: 40,
	},
})
