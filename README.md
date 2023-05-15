# React

## React 介绍 、JSX介绍

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

> 16.8 与 18.0 render变化

```jsx
//16版本的写法
ReactDOM.render(<h1>666666</h1>,document.querySelector("#root"))

//以下是18版本写法
const root = ReactDOM.createRoot(document.querySelector("#root"))
root.render(<h1>123456</h1>)
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

### jsx 语法规则

- 1.全称: JavaScript XML

- 2.react定义的一种类似于XML的JS扩展语法: JS + XML本质是React.createElement(component, props, ...children)方法的语法糖

- 3.作用: 用来简化创建虚拟DOM

使用细节：

- 特殊属性写法 className htmlFor

- 没有内容的节点可以使用 单标签

- 必需有根节点，可以使用 <></> 幽灵标签，其实是 <React.Fragment></React.Fragment> 简写

- 如果 JSX 有换行，最好使用 () 包裹

示例代码：

```jsx
// class ---> className     for ---> htmlFor
<div className="box">
 <label htmlFor="ck"></label>
 <input id="ck" type="checkbox" />
</div>
```

- className 和 style

```html
  <style>
    .box {
      height: 200px;
      width: 200px;
      color: red;
    }
  </style>

  <script type="text/babel">
   const sy = {
      color: 'pink',
      backgroundColor: '#000',
      fontWeight: 'bold',
    }
    const VDOM1 = ( // jsx多行 使用()包裹
      // 必须要有根节点
      <React.Fragment>
        <div className = "box" >
          <label id="myLabel" htmlFor="male">Male</label>
          <span className="icon-edit" />
          <p style= { sy } >hello</p>
          <div style={ {width: 50, height: 50, backgroundColor: 'skyblue'} }> 文本内容 </div>
        </div>
      </React.Fragment>
    )
  <script />
```

- 虚拟必须只有一个根节点

```jsx
// 1. 使用 React.Fragment 代码片段
import React from 'react';
import ReactDom from 'react-dom';
const element = (
  <React.Fragment>
    <div>header</div>
    <div>footer</div>
  </React.Fragment>
);
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(element);
```

```jsx
// 2. 使用<></>可以避免没必要的标签产生 简写 React.Fragment
import ReactDom from 'react-dom';
const element = (
 <>
   <div>header</div>
   <div>footer</div>
 </>
);
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(element);
```

- 用小括号

```jsx
// 有换行的时候最好使用()可以让标签对其，避免没必要的错误
const element = (
 <>
   <div>header</div>
   <div>footer</div>
 </>
);
```

- jsx中标签元素

```js
   <div id="app"></div>
   <script type="text/babel">  
      const VDOM1 = ( // jsx多行 使用()包裹
      // 必须要有根节点
      <React.Fragment>
        <test>test</test> // 首字母小写，该标签会转为html中同名元素标签，没测抛出没找到先关元素，不影响视渲染
        // <Good >123</Good> 报错，首字母大写，react就会渲染，没有就是报错影响视图渲染
      </React.Fragment>
    )

    ReactDOM.render(VDOM1, document.getElementById('app'))
   </script>
```

jsx语法规则总结：

* 1.定义虚拟dom时，不要写引号

* 2.标签中混入`js 表达式`要使用{}，不能写`js代码`比如 if(a==c){} for(i=1;i<10;i++){}

* 3.样式类名指定，不要使用class，使用className

* 4.内联样式，要用style={ {key:value} } 形式

* 5.jsx中必须使用根标签包裹 `<React.Fragment></React.Fragment>` 或者`<></>`

* 6.单个标签必须闭合` <span className="icon-edit" /> `或者 `<span className="icon-edit"></span>`

* 7.标签首字母

* (1)若小写字母开头，则转换为html标签中的同名元素。如 `<span></span>`，如果没有同名对应的html标签，则报错比如`<good></good>`

* (2)若大写字母开头，react就去渲染对应的组件，若没有则全局报错，影响视图渲染`<Good></Good>`

案例：动态展示下面列表

<img src="file:///Users/echo/Desktop/myblog/react/img/iShot_2023-05-15_02.12.28.png" title="" alt="iShot_2023-05-15_02.12.28.png" data-align="center">

```jsx
  <script type="text/babel">
    const list = ['angular','react','vue']
    // 1.react {}嵌入表达式中出传入一个数组，react会自动进行遍历
    // 下面是通过map进行数组处理，返回一个新的数组
    // 2.react {}嵌入表达式传入一个对象，react会报错无法进行遍历
    const obj = { name1: 'angular', name2: 'react',name3: 'vue'}
    const VDOM = (
      <div>
        <h1>前端js框架列表</h1>
        <ul>
          { list.map( item => <li key={item}>{item}</li>) }
        </ul>
        { obj } // 渲染这里会报错 obj 是一个对象
      </div>
    )
    // 2.渲染虚拟dom到页面 ReactDOM函数 (VDom, 选自器)
    ReactDOM.render(VDOM, document.getElementById('app'))
  </script>
```

### JSX 嵌入表达式

> 掌握在`JSX`中嵌入`JS`表达式，进行渲染

知识内容：在`JSX`中使用`{}`嵌入`JS`表达式

- 展示数据
- 进行运算
- 三元运算
- 使用函数
- 使用 JSX
- 使用注释

> js代码与js表达式

在{}嵌入表达式中只能写 js表达式 `{ list.map( item => <li key={item}>{item}</li> ) }`

* 区分：js语句(代码) 与 js表达式
  
  * 1.表达式：一个表达式会产生值，任何一个需要值得地方，逻辑表达式返回一个值
    
    * (1). a a+b a*c 'sa'+ 0
    
    * (2). a + b > c ? '大于':'小于'
    
    * (3). sumFn(10,15)
    
    * (4). array.map() array.filter()
    
    * (5). function test() {} 函数返回函数对象
  
  * 2.语句(代码)：
    
    - (1). if() {}
    
    - (2). for(){} / while(true){} / do{}while(true)
    
    - (3). switch(){ case 1: a+b;case 2: b+e; default: 5+1 }

示例：

```jsx
import React from 'react';
import ReactDom from 'react-dom';

// 数据
const data = {
  name: 'tom',
  age: 18,
};

// 函数
const up = () => {
  return data.name.toUpperCase();
};

// jsx表达式
const list = (
  <ul>
    <li>jack</li>
    <li>tony</li>
  </ul>
);

const element = (
  <div>
    {/* 1. 使用数据  注释推荐快键键(ctrl+/)  */}
    <div>姓名：{data.name}</div>
    <div>年龄：{data.age}</div>
    {/* 2. 使用运算 */}
    <div>明年几岁：{data.age + 1}</div>
    {/* 3. 使用三元 */}
    <div>是否成年：{data.age > 16 ? '是' : '否'}</div>
    {/* 4. 使用函数 */}
    <div>姓名大写：{up()}</div>
    {/* 5. 使用JSX(jsx也是表达式) */}
    <div>朋友：{list}</div>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(element);
```

**总结：** 使用`{}`可以在`JSX`中使用表达式，注意不能使用语句。

### JSX 条件渲染

> 使用分支语句、三元运算、逻辑运算进行条件渲染

1. `if/else` 条件渲染

```jsx
const loading = true;
// 不能再JSX中写语句，但，可以充分利用JS能力
const getContent = () => {
  if (loading) {
    return <div>正在加载...</div>;
  } else {
    return <div>数据加载完毕，这是显示数据</div>;
  }
};
const element = <div>{getContent()}</div>;
```

2. `三元运算符` 完成条件渲染

```jsx
const loading = true;
const element = (
  <div>
    {loading ? <div>正在加载...</div> : <div>数据加载完毕，这是显示数据</div>}
  </div>
);
```

3. `逻辑运算` 完成条件渲染

```jsx
const loading = true;
const element = (
  <div>
    {loading && <div>正在加载...</div>}
    {loading || <div>数据加载完毕，这是显示数据</div>}
    {loading /* jsx中直接使用true，表达式值为true是不直接渲染的 */}
  </div>
);
```

### JSX 列表渲染

> 掌握在`JSX`中使用`Array.map()`来进行列表的渲染

1. 使用 `map` 渲染列表

```jsx
// 1. 数据
const list = ['tom', 'jack', 'tony'];
// 2. 转jsx数组
const list2 = list.map((item) => <li>{item}</li>);
// 3. 使用
const element = <ul>{list2}</ul>;
```

3. 直接在 `JSX` 中使用 `map` 渲染列表

```jsx
// 1. 数据
const list = ['tom', 'jack', 'tony'];
// 2. 使用 map调用其实也是js表达式
const element = (
  <ul>
    {list.map((item) => (
      <li>{item}</li>
    ))}
  </ul>
);
```

4. `key` 属性使用

> Warning: Each child in a list should have a unique "key" prop.jsx

```jsx
// 1. 数据
const list = ['tom', 'jack', 'tony'];
// 2. 使用
const element = (
  <ul>
    {list.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);
```

**总结：** 在`JSX`中一般使用 `map` 来遍历进行渲染，遍历的时候需要给子元素加上 `key={唯一标识}`

练习题目：

- 使用以下数据，渲染无序列表，显示姓名和是否成年



### JSX 样式-style 方式

> 掌握使用 style 属性设置样式

知识内容：

- `style` 接受一个采用小驼峰命名属性的 `JavaScript` 对象，而不是 `CSS` 字符串
- `style` 中的 `key` 采用小驼峰命名是为了与 `JS` 访问 `DOM` 节点的属性保持一致
- `React` 会自动添加 ”px” 后缀到内联样式为数字的属性后，其他单位需要手动添加

需求：去掉上一个列表案例 `ul` 的点，加上背景样式，设置字体大小，给第一个 `p` 设置两倍字体大小

```jsx
    const list = [
      { id: 100, name: 'tom', age: 15 },
      { id: 101, name: 'jack', age: 18 },
      { id: 102, name: 'tony', age: 20 },
    ];
    const styleObj = {
      listStyle: 'none',
      backgroundColor: 'pink',
      fontSize: 18 // react 会自动添加px
    }

    const VDOM = (
      <div>
        <ul style={styleObj}>
          { list.map(item => {
              return (
                <li key={item.id}>
                  {/* style写在行内样式 */}
                  <p style={ {fontSize: '2em', color: 'yellow'} }>name: {item.name}</p>
                  <p>age {'>'} 18: {item.age > 18 ? 'yes 18':'no 18'}</p>
                </li>
              )
            }) 
          }
        </ul>
      </div>
    )
    // 2.渲染虚拟dom到页面 ReactDOM函数 (VDom, 选自器)
    ReactDOM.render(VDOM, document.getElementById('app'))
```

**总结：** style` 属性使用 `{}` 绑定样式对象，默认 `px` 单位可以省略使用数字，一般需要动态设置属性样式使用这种方式

### JSX 样式-className 方式

> 掌握使用 `className` 设置类名来使用样式

知识内容：

- `className` 设置类名，和 `class` 属性要求一样只能是字符串
- 如果需要根据数据设置类名，可以使用 `{}` 嵌入 `JS` 表达式实现

演示代码：

- 需求：在元素 `button`上根据 `isActive` 数据的值添加 `active` 类名

index.css

```css
.button {
  width: 100px;
  height: 40px;
  border: 1px solid #eee;
  color: #999;
  border-radius: 4px;
  display: inline-block;
  text-align: center;
  line-height: 40px;
  box-shadow: 2px 2px 10px #ccc;
  cursor: pointer;
  user-select: none;
}

.button.active {
  background: #069;
  color: #fff;
  border-color: #069;
}

.button.block {
  display: block;
  width: 100%;
}
```

index.js

```js
import ReactDom from 'react-dom';
// 在src下新建index.css文件，导入进来即可
import './index.css';
const isActive = false;

const element = (
  <span className={`button ${isActive ? 'active' : ''}`}>按钮</span>
);
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(element);
```

**总结：** 如果只是个别类名的变化使用 `className` 属性嵌入 `三元表达式` 即可完成

### JSX 样式-动态 className

> 掌握在 `React` 中使用 `JS` 原生的能力处理多个类的动态绑定

知识内容：

- 在使用 `className` 的时候遇见多个类名动态绑定，可以模仿 `vue` 使用对象的方式
- `vue` 中绑定类名的时候使用 `{类名:布尔}` 用布尔值决定是否加上这个类名

演示代码：

- 需求：在元素 `button`上根据 `isActive` 数据的值添加 `active` 类名，`isBlock` 数据的值添加 `block` 类名

```jsx
    // 如果是多个类名的变化呢？
    // vue 中绑定类名的时候使用 {类名:布尔} 用布尔值决定是否加上这个类名 { btn: true, 't-btn': true }
    const isActiveT = false
    const isBlocked = false

    // 类名对象，即像vue中在class="{btn: true'}"
    const classObject = { // key属性
      button: true,
      active: isActiveT,
      block: isBlocked
    }
    const className = (classObj) => {
      return Object.keys(classObj)
      .filter(key => classObj[key]) // 将属性名为true，过滤出来形成数组
      .join(' ') // 再将数组每个元素进行拼接，返回成字符串
    }
    
    const VDOM2 = (
      <div>
        <span className={ className(classObject) }>按钮2</span>
      </div>
    )
    
    ReactDOM.render(VDOM2, document.getElementById('app'))
```

**总结：** 使用 `JS` 原生的能力处理多个类名的动态绑定，当然这样的需求已经有 `classnames` 库给我们解决了