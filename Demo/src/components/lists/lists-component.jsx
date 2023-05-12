// 函数组件
const Lists = ({ arrLists }) => {
  console.log(`子组件Lists渲染`);
  // 图片样式对象
  const imgCSS = {
    border: "1px solid red",
    borderRadius: '10px'
  }
  return (
    <ul className="ul-container">
      {
        arrLists.map(
          (item) => {
            return (
              <div key={ item.url }>
                <li>{ item.name }</li>
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.id}.png`} alt=""
                  style={imgCSS}
                />
              </div>
            )
          }
        )
      }
    </ul>
  )
}

/*class Lists extends React.Component {
  constructor() {
    super()
  }
  render() {
    // 这里的组件时没有state状态的，就需要通过父组件 传递个 子组件
    console.log(`子组件Lists渲染 properties`);
    console.log(this.props)
    const { arrLists } = this.props
    // 图片样式对象
    const imgCSS = {
      border: "1px solid skyblue",
      borderRadius: '10px'
    }
    return (
      <ul className="ul-container">
        {
          arrLists.map(
            (item) => {
              return (
                <div key={ item.url }>
                  <li>{ item.name }</li>
                  <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.id}.png`} alt=""
                    style={imgCSS}
                  />
                </div>
              )
            }
          )
        }
      </ul>
    )
  }
}*/