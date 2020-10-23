import axios from 'axios'
import { useSession } from './auth-provider'
const { token } = useSession()

axios.defaults.headers.common.Authorization = `Bearer ${token}`

export const get = async url => {
  const { data } = await axios.get(url)
  return data
}

export const post = async (url, payload) => {
  const { data } = await axios.post(url, payload)
  return data
}

export const put = async (url, payload) => {
  const { data } = await axios.put(url, payload)
  return data
}
