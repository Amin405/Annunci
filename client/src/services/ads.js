import axios from 'axios'
import userService from './user'
const baseUrl = '/api/items'
const serverUrl = 'https://annunci-webserver.onrender.com'

/**
 * GET: /api/items/images
 * Return all images from the database 
 */
const getAllImages = async () => {
  const updateUrl = baseUrl + `/images`
  const request = await axios.get(serverUrl + updateUrl)
  return request.data
}

/**
 * Create a new url link for the image with id
 */
const makeImageLink = (id) => {
  const updateUrl = serverUrl + baseUrl + `/images/${id}`
  return updateUrl
}

/**
 * GET: /api/items
 * Return all ads from the database
 */
const getAllItems = async () => {
  const request = await axios.get(serverUrl + baseUrl)
  return request.data
}

/**
 * GET: /api/items/:id
 * Return an ad with the corresponding id
 */
const getItemById = async (id) => {
  const updateUrl = baseUrl + `/${id}`
  const request = await axios.get(serverUrl + updateUrl)
  return request.data
}

/**
 * GET: /api/items/user/:id
 * Return all items of a user
 */
const getUserItems = async (id) => {
  const updatedUrl = baseUrl + `/user/${id}`
  const request = await axios.get(serverUrl + updatedUrl)
  return request.data
}

/**
 * POST: /api/items
 * Create a new ad
 */
const createAd = async (newObj) => {
  const response = await axios.post(serverUrl + baseUrl, newObj, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `bearer ${userService.getToken()}`
    }
})
  return response.data
}

/**
 * DELETE: /api/items
 * Delete an existing ad with the corresponding id
 */
const deleteAd = async (id) => {
  const updatedUrl = baseUrl + `/${id}`
  return axios.delete(serverUrl + updatedUrl, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `bearer ${userService.getToken()}`
    }
})
}

/**
 * POST: /api/:id/commentAd
 * Add a comment to the ad with the id
 */
const commentAd = async (id, comment) => {
  const updatedUrl = baseUrl + `/${id}/commentAd`
  const response = await axios.post(serverUrl + updatedUrl, { comment: comment })
  return response.data
}

const adsService = {
  getAllImages,
  makeImageLink,
  getAllItems,
  getItemById,
  getUserItems,
  createAd,
  deleteAd,
  commentAd
}

export default adsService