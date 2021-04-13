import CryptoJS from 'crypto-js'

// encrypt function
export const encrypt = (text) => {
	return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(text))
}

// decrypt
export function decrypt(data) {
	return CryptoJS.enc.Base64.parse(data).toString(CryptoJS.enc.Utf8)
}
