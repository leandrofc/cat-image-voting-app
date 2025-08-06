import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api.thecatapi.com/v1',
  headers: {
    'x-api-key': import.meta.env.VITE_CAT_API_KEY,
  },
})