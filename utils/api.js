import { myAxios } from './axios'

export const auth = {
    login: (data) => myAxios.post(`auth/login`, data),
    register: (data) => myAxios.post(`/register`, data),
}


export const user = {
    allUsers: (data,token) => myAxios.post(`/users/get-all`, data, {
        headers:{
            Authorization: `Bearer ${token}`
        }  
      }),
    userGroups: (data) => myAxios.post(`/register`, data),
    logs: (data) => myAxios.post(`/register`, data),
    setting: (data) => myAxios.post(`/register`, data),
}

export const peruri = {
    videoVerif: (videoString,token) => myAxios.post(`/videosverification/create`, videoString,  {
        headers:{
            Authorization: `Bearer ${token}`
        }  
    }),
    signature: (signatureData, token) => myAxios.post(`/kyc-ttd/send-speciment`, signatureData, {
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
}