const BASE_URL = 'https://rebrickable.com/api/v3/lego'

export const API_URL = (slug) => `${BASE_URL}/${slug}`

export const options = {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    Authorization: 'key 9ba6b239ec36ecb0be385a636ac2492b'
  }
}
