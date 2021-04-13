// format date value
export const formatIsoDate = (date) => {
	if (date !== undefined) {
		const dateFormat = new Date(date)
		const year = dateFormat.getFullYear()
		let month = dateFormat.getMonth() + 1
		let dt = dateFormat.getDate()
		if (dt < 10) {
			dt = '0' + dt
		}
		if (month < 10) {
			month = '0' + month
		}
		const dateString = `${year}-${month}-${dt}`
		return dateString
	} else {
		return
	}
}
