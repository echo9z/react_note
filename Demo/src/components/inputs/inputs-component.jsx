// 函数组件
const Input = (props) => { // => const Input = ({ onChangeHandler }) 结构props传递的值
  console.log(props);
  const { onChangeHandler } = props
  return (
    <input type="search"
      onChange={ onChangeHandler } />
  )
}
/*class Input extends React.Component {
  
  render() {
    // 传入函数作为参数对象
    const { onChangeHandler } = this.props
    return (
      <input type="search"
        onChange={ onChangeHandler } />
    )
  }
}
*/
