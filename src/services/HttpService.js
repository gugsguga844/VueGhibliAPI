import axios from 'axios'

const baseUrl = 'https://ghibliapi.vercel.app/'

const api = axios.create({
  baseURL: baseUrl,
})

export async function getAllFilms() {
  const response = await api.get('films')
  return response
}

export async function getAllPeople() {
  const response = await api.get('people')
  return response
}
