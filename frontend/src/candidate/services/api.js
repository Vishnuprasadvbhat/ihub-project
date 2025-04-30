import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api/user/candidate/',
});

export default {
  getAll: () => api.get('/profile'),
  create: (data) => api.post('/profile/add', data),
  get: (id) => api.get(`/profile/${id}`),
  update: (id, data) => api.put(`/profile/update/${id}`, data),
  delete: (id) => api.delete(`/profile/delete/${id}`)
};