import { authContext } from '../../hooks/useAuth';
import useProvideAuth from '../../hooks/useProvideAuth';

export default function ProvideAuth({ children }) {
  const auth = useProvideAuth()
  return (
    // 将auth进行共享数据
    // 把auth中的 user数据信息、signin、signout 进行共享
    <authContext.Provider value={ auth }>
      {children}
    </authContext.Provider>
  )
}