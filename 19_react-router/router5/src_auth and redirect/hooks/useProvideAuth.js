import { useState } from 'react'

// 伪造身份
const fakeAuth = {
  isAuthenticated: false, // 是否已认证
  signin(cb) {
    fakeAuth.isAuthenticated = true
    setTimeout(cb, 100); // 伪造延时效果
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false
    setTimeout(cb, 100); // 伪造延时效果
  }
}

export default function useProvideAuth() {
  const [user, setUser] = useState(null)

  // 登录
  const signin = cb => {
    return fakeAuth.signin(() => {
      setUser('isLoggedIn')
      // 执行回调
      cb();
    })
  }
  const signout = cb => {
    return fakeAuth.signout(() => {
      setUser(null)
      // 执行回调
      cb();
    })
  }
  return {
    user,
    signin,
    signout
  }
}