import axios from "axios"

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api"

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
})

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // Add any auth tokens here if needed
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

// Response interceptor
api.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    // Handle common errors
    if (error.response?.status === 429) {
      console.error("Rate limit exceeded")
    } else if (error.response?.status >= 500) {
      console.error("Server error")
    }
    return Promise.reject(error)
  },
)

export const contactAPI = {
  submitForm: async (data: {
    name: string
    email: string
    phone?: string
    linkedinProfile?: string
    message: string
  }) => {
    const response = await api.post("/contact", data)
    return response.data
  },

  getContacts: async (page = 1, limit = 10) => {
    const response = await api.get(`/contact?page=${page}&limit=${limit}`)
    return response.data
  },

  getContactById: async (id: string) => {
    const response = await api.get(`/contact/${id}`)
    return response.data
  },

  deleteContact: async (id: string) => {
    const response = await api.delete(`/contact/${id}`)
    return response.data
  },
}

export default api
