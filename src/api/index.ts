import axios, {
  AxiosInstance,
  AxiosError,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
  AxiosResponse
} from 'axios'
import { ElMessage } from 'element-plus'
import { ResultData } from '@/api/interface'

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
        // 可在此添加请求头或设置loading
        return config
      },
      (error: AxiosError) => {
        return Promise.reject(error)
      }
    )

    this.service.interceptors.response.use(
      (response: AxiosResponse) => {
        const { data } = response
        // 登录失效
        if (data.code === 401) {
          // 在此处理token过期的逻辑
          return
        }
        // 全局错误信息拦截
        if (data.code && data.code !== 200) {
          console.log('data', data)
          ElMessage.error(data.msg)
          return Promise.reject(data)
        }
        // 成功请求（在页面上除非特殊情况，否则不用处理失败逻辑）
        return data
      },
      (error: AxiosError) => {
        const { response } = error
        // 请求超时 && 网络错误单独判断，没有 response
        if (error.message.indexOf('timeout') !== -1) ElMessage.error('请求超时！请您稍后重试')
        if (error.message.indexOf('Network Error') !== -1) ElMessage.error('网络错误！请您稍后重试')
        // 根据服务器响应的错误状态码，做不同的处理
        let message = ''
        const status = response?.status
        switch (status) {
          case 401:
            message = '登录失效！请您重新登录'
            break
          case 403:
            message = '当前账号无权限访问！'
            break
          case 404:
            message = '您所访问的资源不存在！'
            break
          case 500:
            message = '服务器异常！'
            break
          default:
            message = '请求失败！'
            break
        }
        ElMessage.error(message)
        // 服务器结果都没有返回(可能服务器错误可能客户端断网)，断网处理:可以跳转到断网页面
        // 这里添加跳转逻辑，或其他处理
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
