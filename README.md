# React

## React 介绍

- 1.采用组件化模式，声明式编码，提高开发效率以及组件复用率
- 2.RN 可以使用react语法进行移动端开发
- 3.使用虚拟dom+diff算法，减少真实DOM的交互

### 原生js实现

![原生js](./img/iShot_2023-05-12_18.05.08.png)

频繁的操作dom

![](./img/iShot_2023-05-12_18.11.49.png)

### react实现

![](./img/iShot_2023-05-12_18.17.26.png)

虚拟dom在内存中，对内存进行操作，虚拟dom进行对比更新渲染的时候，原来的虚拟dom没没有发生变化直接使用，只对新虚拟dom进行渲染。

原生js 有100真实dom，变化后101dom，就需要渲染101次

react  有100真实dom，变化后101dom，对比虚拟dom原来前100次dom一样，最后一次新虚拟dom，就只需要渲染1次



1. react.js：React核心库。

2. react-dom.js：提供操作DOM的react扩展库。

3. babel.min.js：解析JSX语法代码转为JS代码的库。

### react 第一个案例

```jsx
  <div id="app"></div>
  <!-- 先引入react核心库 react-dom操作dom库 babel,jsx转换js库  -->
  <script type="text/javascript" src="../lib/16.8.4/react.development.js"></script>
  <script type="text/javascript" src="../lib/16.8.4/react-dom.development.js"></script>
  <script type="text/javascript" src="../lib/16.8.4/babel.min.js"></script>

  <!-- text/babel 写的是jsx，让babel进行编译转译为js -->
  <script type="text/babel">
    // 1.创建虚拟dom
    const VDOM = <h1>hello,React</h1>/* 此处不需要写引号，不是字符串 */
    // 2.渲染虚拟dom到页面 ReactDOM函数 (VDom, 选自器)
    ReactDOM.render(VDOM, document.getElementById('app'))
  </script>
```

### 两种创建虚拟dom创建方式

> jsx为了解决简单的dom结构

- jsx创建虚拟dom

```jsx
  <div id="app"></div>
  <!-- 先引入react核心库 react-dom操作dom库 babel,jsx转换js库  -->
  <script type="text/javascript" src="../lib/16.8.4/react.development.js"></script>
  <script type="text/javascript" src="../lib/16.8.4/react-dom.development.js"></script>
  <script type="text/javascript" src="../lib/16.8.4/babel.min.js"></script>

  <!-- text/babel 写的是jsx，让babel进行编译转译为js -->
  <script type="text/babel">
    // 1.创建虚拟dom
    const VDOM = ( /* 此处不需要写引号，不是字符串 */
      <h1 id='text'>
        <span>hello,React</span>
      </h1>
    )
    // 2.渲染虚拟dom到页面 ReactDOM函数 (VDom, 选自器)
    ReactDOM.render(VDOM, document.getElementById('app'))
  </script>
```

- js创建虚拟dom

```js
  <div id="app"></div>
  <!-- 先引入react核心库 react-dom操作dom库 babel,jsx转换js库  -->
  <script type="text/javascript" src="../lib/16.8.4/react.development.js"></script>
  <script type="text/javascript" src="../lib/16.8.4/react-dom.development.js"></script>
  <!-- <script type="text/javascript" src="../lib/16.8.4/babel.min.js"></script> -->

  <script type="text/javascript">
    // 1.创建虚拟dom createElement(标签名, 标签属性, 标签内容)
    const VDOM = React.createElement('h1', { id: 'text', className: 't-ty'},
      React.createElement('span', { className: ''}, 'hello,react')
    )
    // 2.渲染虚拟dom到页面 ReactDOM函数 (VDom, 选自器)
    ReactDOM.render(VDOM, document.getElementById('app'))
  </script>
```

### 真实dom 与 虚拟dom

1. 本质上是一个object类型的对象（js对象）

2. 虚拟dom比较“轻”，真实dom”重“，因为虚拟dom是react在内存中创建，不需要那么多属性对象

3. 虚拟dom是react在内存中创建，会被react转化为真实对象，呈现在页面上

```js
  <div id="app"></div>
  <div id="demo"></div>
  <!-- 先引入react核心库 react-dom操作dom库 babel,jsx转换js库  -->
  <script type="text/javascript" src="../lib/16.8.4/react.development.js"></script>
  <script type="text/javascript" src="../lib/16.8.4/react-dom.development.js"></script>
  <script type="text/javascript" src="../lib/16.8.4/babel.min.js"></script>

  <!-- text/babel 写的是jsx，让babel进行编译转译为js -->
  <script type="text/babel">
    // 1.创建虚拟dom
    const VDOM = ( /* 此处不需要写引号，不是字符串 */
      <h1 id='text'>
        <span>hello,React</span>
      </h1>
    )
    // 2.渲染虚拟dom到页面 ReactDOM函数 (VDom, 选自器)
    ReactDOM.render(VDOM, document.getElementById('app'))

    const TDOM = document.getElementById('demo')
    console.log('虚拟dom', VDOM);
    console.log('真实dom',TDOM);
    // debugger 打断点
  </script>
```