class RandomNum {
	generateRC(max) {
		const randomValue = Math.floor(Math.random() * max)
		return randomValue
	}
}

export { RandomNum }
