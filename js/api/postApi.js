import axiosClient from './axiosClient'

const postApi = {
  getAll(params) {
    const url = '/posts'
    return axiosClient.get(url, { params })
  },

  getbyId(id) {
    const url = `/posts/${id}`
    return axiosClient.get(url)
  },

  add(data) {
    const url = `/posts/`
    return axiosClient.post(url, data)
  },

  update(data) {
    const url = `/posts/${data.id}`
    return axiosClient.patch(url, data)
  },

  updateFormData(data) {
    const url = `/posts/${data.id}`
    return axiosClient.patch(url, data, {
      headers: { 'Content-Type': 'multipart/form-data' },
      //   baseURL
      // params
    })
  },

  remove(id) {
    const url = `/posts/${id}`
    return axiosClient.delete(url)
  },
}

export default postApi
