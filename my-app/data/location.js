const Google_API_KEY = 'AIzaSyA9xdVskCuIx5cDPMfuW1cGf-S7KQULbcM'

export function getMapPreview(lat, lng) {
	const imagePreviewURL = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=13&size=400x200&maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${lng}&key=${Google_API_KEY}`
	return imagePreviewURL
}

export async function getAddress(lat, lng) {
	const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${Google_API_KEY}`

	const response = await fetch(url)

	if (!response.ok) {
		throw new Error('Failed to fetch address')
	}

	const data = await response.json()
	const address = data.results[0].formatted_address

	return address
}
