import React from 'react'

// 类组件
class Test extends React.Component {
  constructor(props) {
    super()
    this.state = {
      num: 0,
      str: '这里是str内容',
      arr: [
        { id: 100, name: 'tom', age: 15 },
        { id: 101, name: 'jack', age: 18 },
        { id: 102, name: 'tony', age: 20 },
      ]
    }
  }

  onClickHandler(e) {
    this.setState(() => {
      return {
        num: this.state.num + 1
      }
    }, () => {
      console.log(this.state.num);
    })
  }

  render() {
    return (
      <React.Fragment>
        <h1>{this.state.str}</h1>
        <p>{this.state.num}</p>
        <ul>
          { this.state.arr.map(item => {
            return <li key={item.id}>{item.name}</li>
          })}
        </ul>
        {/* 改变this 的指向* */}
        <button onClick={ this.onClickHandler.bind(this) } >button</button>
      </React.Fragment>
    )
  }
}

export default Test