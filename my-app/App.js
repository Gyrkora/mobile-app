import { StyleSheet, View, Text } from 'react-native'
import colors from './constants/colors'
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'
import MathGames from './pages/MathGames'
import AppNavigation from './navigation/AppNavigation'
import store from './store'
import { Provider } from 'react-redux'
import { useEffect } from 'react'
import { init } from './data/database'
import { useState } from 'react'

export default function App() {
	const [dbInitialized, setDbInitialized] = useState(false)
	const [loaded] = useFonts({
		EducBold: require('./assets/fonts/EduVICWANTBeginner-Bold.ttf'),
		EducMedium: require('./assets/fonts/EduVICWANTBeginner-Medium.ttf'),
		EducRegular: require('./assets/fonts/EduVICWANTBeginner-Regular.ttf'),
		EducSemibold: require('./assets/fonts/EduVICWANTBeginner-SemiBold.ttf'),
	})

	useEffect(() => {
		init()
			.then(() => {
				setDbInitialized(true)
			})
			.catch((err) => {
				console.log(err)
			})
	}, [])

	if (!loaded || !dbInitialized) {
		return <AppLoading />
	}

	return (
		<Provider store={store}>
			<AppNavigation />
		</Provider>
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
