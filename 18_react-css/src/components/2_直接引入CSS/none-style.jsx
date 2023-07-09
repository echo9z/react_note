import './none.css'
// 组件中直接引入.css文件是全局样式，如果不同组件使用css文件中存在样式名称相同，那么后引入的样式会覆盖前面的组件样式
import About from './comp/about'
import Home from './comp/home'

export default function NoneStyle() {
  return (
    <div>
      <h2 className='title'>none-style</h2>
      <p className='content'>这是一段文字啊</p>
      {/* About和home组件存在使用相同样式类名，后引入home组件中css样式覆盖About组件样式 */}
      <About/>
      <Home/>
    </div>
  )
}
