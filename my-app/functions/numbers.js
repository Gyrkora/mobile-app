class RandomNum {
	generateRC(max) {
		const randomValue = Math.floor(Math.random() * max)
		return randomValue
	}
}

// const random = new RandomNum() //generic
// const randomValue = random.generateRC(1700) //random

//sustruction

export { RandomNum }
