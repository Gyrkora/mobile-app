import { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import AddNumbers from './pages/AddNumbers'
import Worterbuch from './pages/Wörterbuch'
import colors from './constants/colors'
import MinusNumbers from './pages/MinusNumbers'
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'
import MathGames from './pages/MathGames'
import AppNavigation from './navigation/AppNavigation'

export default function App() {
	const [loaded] = useFonts({
		EducBold: require('./assets/fonts/EduVICWANTBeginner-Bold.ttf'),
		EducMedium: require('./assets/fonts/EduVICWANTBeginner-Medium.ttf'),
		EducRegular: require('./assets/fonts/EduVICWANTBeginner-Regular.ttf'),
		EducSemibold: require('./assets/fonts/EduVICWANTBeginner-SemiBold.ttf'),
	})

	if (!loaded) {
		return <AppLoading />
	}

	return <AppNavigation />
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
