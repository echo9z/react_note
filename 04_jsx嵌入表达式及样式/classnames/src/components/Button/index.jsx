import React from 'react'
import classNames from 'classnames'
import './index.css'

// 类组件
class Button extends React.Component {
  constructor(props) {
    super()
    this.state = {
      isActive: true,
      isBock: true,
    }
  }

  // // 1. 使用字符串
  // classNames('foo', 'bar'); // foo bar
  // // 2. 使用对象
  // classNames({ foo: true, bar: true }); // foo bar
  // // 3. 使用数组
  // classNames(['foo', 'bar']); // foo bar
  // // 4. 混合使用
  // classNames('foo', { bar: true }); // foo bar

  render() {
    return (
      <React.Fragment>
        <span className={ classNames('button', { active: this.state.isActive, block: this.state.isBock }) } >button</span>
      </React.Fragment>
    )
  }
}

export default Button