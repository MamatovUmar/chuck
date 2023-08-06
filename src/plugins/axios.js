import axios from 'axios'

const BASE_URL = process.env.VUE_APP_BASE_URL

const AxiosPlugin = {
  install(Vue, store) {
    const axiosInstance = axios.create({
      baseURL: BASE_URL
    })

    Vue.prototype.$axios = axiosInstance
    store.$axios = axiosInstance
  }
}

export default AxiosPlugin;
