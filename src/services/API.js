import axios from "axios"

const API = "https://66e526d55cc7f9b6273c69d2.mockapi.io"

const getProjects = () => axios.get(`${API}/register`)

export {getProjects}