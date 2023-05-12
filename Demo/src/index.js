// 通过ReactDOM 创建根节点组件
const root = ReactDOM.createRoot(document.getElementById("root"))
// 通过根组件的render函数，在根组件中渲染内容
// root.render(<h1>react渲染的内容</h1>)
// const str = '这是一段文字'
// const arr = ['ai', 'bi', 'ci']
// 正常import App from 'src/app.js'
// 将app组件渲染到根组件上
root.render(<App />) 