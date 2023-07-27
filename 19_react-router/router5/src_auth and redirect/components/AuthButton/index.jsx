import { useHistory } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

export default function AuthButton() {
  let history = useHistory();
  let auth = useAuth();
  // 根据用户信息判断，是否存在用户登录信息，存在显示signout
  return auth.user ? (
    <p>
      Welcome!{" "}
      <button
        onClick={() => {
          auth.signout(() => history.push("/"));
        }}
      >
        Sign out
      </button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  );
}