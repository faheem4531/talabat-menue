import Axios from 'axios'
import { NEXT_APP_BASE_URL, TEMP_TOKEN } from '../_lib/constants'

const api = Axios.create({
  baseURL: NEXT_APP_BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + TEMP_TOKEN,
  },
})

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const errorCode = error?.response?.status
    if (errorCode === 401 && error.response.config.url !== 'users/login') {
      localStorage.clear();
      window.location.href = '/sign-in'
    }
    return Promise.reject(error)
  },
)

export default api