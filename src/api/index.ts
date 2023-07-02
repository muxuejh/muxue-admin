import axios, {
  AxiosInstance,
  AxiosError,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
  AxiosResponse
} from 'axios'
import { ElMessage } from 'element-plus'
import { ResultData } from '@/api/user/type'

const config = {
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 5000
}

class RequestHttp {
  service: AxiosInstance
  public constructor(config: AxiosRequestConfig) {
    this.service = axios.create(config)

    this.service.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        return config
      },
      (error: AxiosError) => {
        return Promise.reject(error)
      }
    )

    this.service.interceptors.response.use(
      (response: AxiosResponse) => {
        const { data } = response
        return data
      },
      (error: AxiosError) => {
        const { response } = error
        let message = ''
        const status = response?.status
        switch (status) {
          case 401:
            message = 'TOKEN过期'
            break
          case 403:
            message = '无权访问'
            break
          case 404:
            message = '请求地址错误'
            break
          case 500:
            message = '服务器错误'
            break
          default:
            message = '网络错误'
            break
        }
        ElMessage.error(message)
        return Promise.reject(error)
      }
    )
  }

  get<T>(url: string, params?: object): Promise<ResultData<T>> {
    return this.service.get(url, params)
  }
  post<T>(url: string, data?: object): Promise<ResultData<T>> {
    return this.service.post(url, data)
  }
  put<T>(url: string, data?: object): Promise<ResultData<T>> {
    return this.service.put(url, data)
  }
  delete<T>(url: string, params?: object): Promise<ResultData<T>> {
    return this.service.delete(url, params)
  }
}

export default new RequestHttp(config)
