// 函数组件
const App = () => {
  // 函数组件没有构造函数，因此需要 react16.8提供了useState函数来初始化状态值
  // const [state, setState] = useState(初始值)
  // state为初始化为[]   setState为设置值的状态值方法
  const [str, setStr] = React.useState('这是一段文字')
  const [arr, setArr] = React.useState([]) // 初始获取数组值
  const [filteredArr, setFilteredArr] = React.useState([]) // 过滤后的值

  // 这样写会出现死循环问题，react函数组件从上到下执行一次，因为Fetch的内容会把状态值的内容改写，改了以后会执行函数组件中的内容，又fetch，又改写就会进入死循环
  // 当前app函数无法掌控fetch改变状态，所有react提供了useEffect(函数, []) 第一个参数是我们要执行的函数
  React.useEffect(() => {
    console.log('fetch 前呀')
    fetch('https://pokeapi.co/api/v2/pokemon')
        .then(res => res.json()) // 获取到的数据转化为json格式
        .then(json => {
          // 直接赋值，页面视图没有发送改变？原因是react一个特点；react不会让我们像以前一样频繁的操作dom。通过赋值修改对象属性，但是内存中对象属性是没有改变的，如果要改变内存中对象属性，最简单是创建一个新的App的对象
          // this.state.arr = json.results
          // 但是react中提供setState方法，改变状态值
          json.results.map((item, index) => item.id = index + 1) // 为每个元素添加一个id元素
          setArr(json.results)
          setFilteredArr(json.results)
        })
    console.log('fetch 后呀')

    return () => {
      console.log('second')
    }
  }, [1,2]) // 把数据设置为空表示只需要执行一次

  // input改变事件函数
  const onChangeHandler = event => {
    const comparedArr = arr.filter(item => {
      // 数组每一个元素都 如果输入的字符串包含，则将新的元素返回
      return item.name.includes(event.target.value)
    })
    setFilteredArr(comparedArr)
  }
  const onClickHandler = () => {
    setStr(str + 1)
  }

  // 返回写入jsx语法
  return (
    <div>
      <h1>你好react</h1>
      <h2>{ str }</h2>
      <button onClick={onClickHandler}>点击我</button>
      <Input onChangeHandler={ onChangeHandler } />
      
      <Lists arrLists={ filteredArr } />
    </div>
  )
}


// 类组件 创建一个类 继承React.Component类
/*class App extends React.Component {
  constructor() {
    console.log('构造函数')
    super()
    // 通过当前实例中的this来定义state属性
    this.state = {
      str: '这是一段文字',
      arr: [], // 一般数据通过请求获取的
      filteredArr: [] // 存放过滤后匹配的数组
    }
  }

  // 一般先呈现页面的轮廓，再将获取的页面数据展示到页面上；这样用户就不会看见先数据后轮廓的奇怪现象
  // react 提供componentDidMount方法，可以使组件挂载完毕后在执行这个方法内的内容
  componentDidMount() {
    console.log('组件已挂载')
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then(res => res.json()) // 获取到的数据转化为json格式
      .then(json => {
        // 直接赋值，页面视图没有发送改变？原因是react一个特点；react不会让我们像以前一样频繁的操作dom。通过赋值修改对象属性，但是内存中对象属性是没有改变的，如果要改变内存中对象属性，最简单是创建一个新的App的对象
        // this.state.arr = json.results
        // 但是react中提供setState方法，改变状态值
        json.results.map((item, index) => item.id = index + 1) // 为每个元素添加一个id元素
        this.setState(
          () => {
            return { 
              arr: json.results,
              filteredArr: json.results // 在获取数据时，更新filteredArr的值
            } 
          }, // 第一个回调函数，主要用于更新状态值
          () => { console.log(this.state.filteredArr) } // 第二个回调函数，用于更新状态值后的操作，比如获取最新值 或 输出最新值
        )
        // console.log(this.state.arr)
      })
  }

  // input框的事件改变函数
  onChangeHandler = event => {
    this.setState(
      () => {
        return {
          filteredArr: this.state.arr.filter(item => {
            // 数组每一个元素都 如果输入的字符串包含，则将新的元素返回
            return item.name.includes(event.target.value)
          })
        }
      }, 
      () => {
        console.log(`searching: ${event.target.value}`);
        console.log(this.state.filteredArr);
      }
    )
  }
  render() {
    console.log('渲染');
    // jsx语法 是js语法一个拓展，在jsx中必须有只有一个根元素
    // 使用js中变量通过一对{} 进行引用
    return (
      <div>
        <h1>你好react</h1>
        <h2>{ this.state.str + 1 }</h2>
        <Input onChangeHandler={ this.onChangeHandler } />
        
        <Lists arrLists={ this.state.filteredArr } />
      </div>
    )
  }
}*/