import { ApiService } from "../services/ApiService"
import useSWR from "swr"

export function useAPI (endpoint, config) {
  const { data, error } = useSWR(endpoint, async (url) => {
    const response = await ApiService(url, config)
    return response.data
  })

  return { data, error }
}