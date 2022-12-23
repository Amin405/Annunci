import axios from 'axios'
const baseUrl = '/api/users'
const serverUrl = 'https://annunci-webserver.onrender.com'

/**
 * POST: /api/users
 * Get newAccount parameter and create a new account 
 */
const createAccount = async (newAccount) => {
  const response = await axios.post(serverUrl + baseUrl, newAccount)

  return response.data
}

const accountService = {
  createAccount
}

export default accountService