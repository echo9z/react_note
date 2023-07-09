// 模块化引入
import noneModule from './none.module.css'
import About from './comp/about'
import Home from './comp/home'

export default function NoneStyle() {
  return (
    <div>
      <h2 className={noneModule.title}>none-style</h2>
      {/* ${noneModule.p-Sy} module模块化不支持 p-sy带 -的类名，但要写成${noneModule['p-sy']} */}
      <p className={`${noneModule.content} ${noneModule['p-sy']}`}>这是一段文字啊</p>
      {/* About和home组件存在使用相同样式类名，后引入home组件中css样式覆盖About组件样式 */}
      <About/>
      <Home/>
    </div>
  )
}
