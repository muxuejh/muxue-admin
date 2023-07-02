interface IUserInfo {
  username: string
  avatar: string
}
export interface IUserState {
  token: string
  userInfo: IUserInfo
}

/* GlobalState */
export interface GlobalState {
  isCollapse: boolean
  isRefresh: boolean
}
