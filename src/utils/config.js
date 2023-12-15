require('dotenv').config()

const apiKey = process.env.API_KEY
const baseUrl = `http://www.omdbapi.com/?apikey=${ apiKey }&`

export {
  apiKey,
  baseUrl
}