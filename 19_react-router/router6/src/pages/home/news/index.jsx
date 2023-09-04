import { useLocation, useNavigationType, useResolvedPath } from 'react-router-dom'

export default function News() {
  const location = useLocation()
  // 比如 <Link to='/news' replace=false /> 
  // replace=false navTyep为push，true此时为REPLACE， 页面刷新为pop
  const navType = useNavigationType() 

  // 解析url
  console.log(useResolvedPath('/news?id=001&type=plc#ok'));
  console.log('location', location);
  console.log('navType', navType);
  return (
    <div style={{background: 'pink'}}>
      <h3>news</h3>
      <ul>
        <li>news001</li>
        <li>news002</li>
        <li>news003</li>
      </ul>
    </div>
  )
}
