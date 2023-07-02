// 请求响应参数（不包含 data）
export interface Result {
  code: number
  msg: string
}

// 请求响应参数（包含 data）
export interface ResultData<T = any> extends Result {
  data: T
}

// 登录模块
export namespace Login {
  export interface ReqLogin {
    username: string
    password: string
  }
  export interface ResLogin {
    avatar: string
    buttons: string[]
    desc: string
    password: string
    roles: string[]
    routes: string[]
    token: string
    tokenTime: number
    userId: number
    username: string
  }
  export interface ResUserInfo extends Result {
    routes: string[]
    buttons: string[]
    roles: string[]
    name: string
    avatar: string
  }
}
