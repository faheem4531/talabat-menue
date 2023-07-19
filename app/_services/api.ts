import Axios from 'axios'

const api = Axios.create({
  baseURL: 'https://api.yourldnchauffeur.com/',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '+ (typeof window !== 'undefined' && localStorage.getItem('token'))
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