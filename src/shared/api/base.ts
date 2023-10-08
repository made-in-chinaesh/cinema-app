import axios from 'axios'

export const API_URL = process.env.API_URL

export const API_KEY = process.env.API_KEY

export const API_IMAGE_URL = process.env.API_IMAGE_URL

export const apiInstance = axios.create({
	baseURL: API_URL,
})
