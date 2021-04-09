import axios from 'axios';

const myAxios = axios.create({
  baseURL: `http://localhost:3021/auth`,
});

myAxios.defaults.headers.post['Content-Type'] = 'application/json';

myAxios.interceptors.request.use(
    config => {
      const token = typeof window !== 'undefined' ? window?.localStorage.getItem('token') : '';
  
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
  
      return config;
    },
    err => Promise.reject(err)
  );
  
  myAxios.interceptors.response.use(
    response => toCamelCase(response.data),
    async err => {
      // Set message if no response returned from Request
      if (!err?.response) err.response = {
        data: {
          message: "Connection Timed Out"
        }
      }
  
      // Clear Token if Response Code 401
      if (err?.response?.status === 401 && typeof window !== "undefined") window?.localStorage.removeItem('token');
  
      // Return Error
      return Promise.reject(toCamelCase(err.response.data))
    }
  );
  
  function toCamelCase(obj) {
    let rtn = obj
    if (obj !== null && typeof (obj) === 'object') {
      if (obj instanceof Array) {
        rtn = obj.map(toCamelCase)
      } else {
        rtn = {}
        for (let key in obj) {
          if (obj.hasOwnProperty(key)) {
            const newKey = key.charAt(0) !== '_' ? key.replace(/(_\w)/g, k => k[1].toUpperCase()) : key;
            rtn[newKey] = toCamelCase(obj[key])
          }
        }
      }
    }
    return rtn
  }
  
export {
    myAxios
  }