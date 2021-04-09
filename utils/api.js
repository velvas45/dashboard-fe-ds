import { myAxios } from './axios'

export const auth = {
    login: (data) => myAxios.post(`/login`, data),
    register: (data) => myAxios.post(`/register`, data),
}