/**
 * 封装 localStorage 和 sessionStorage
 */
enum CacheType {
  Local,
  Session
}

class Cache {
  storage: Storage

  constructor(type: CacheType) {
    this.storage = type === CacheType.Local ? localStorage : sessionStorage
  }

  setStorage(key: string, value: any) {
    this.storage.setItem(key, JSON.stringify(value))
  }

  getStorage(key: string) {
    return JSON.parse(this.storage.getItem(key) as string)
  }

  removeStorage(key: string) {
    this.storage.removeItem(key)
  }

  clearStorage() {
    this.storage.clear()
  }
}

const localCache = new Cache(CacheType.Local)
const sessionCache = new Cache(CacheType.Session)

export { localCache, sessionCache }
