import { PureComponent } from 'react'
import { connect } from 'react-redux'
export class About extends PureComponent {
  render() {
    const { count } = this.props;
    return (
      <div>
        <h2>About Count: {count}</h2>
      </div>
    )
  }
}

// connect() 返回值是一个高阶组件，返回的是一个函数
// 在类组件中需要调用connect函数时，传入两个参数fn1，fn2
// 返回store中需要的state数据
function fn1(state){
  return {
    count: state.a.count
  }
}
export default connect(fn1)(About) // 这里会将fn1中返回对象，<About {...this.props} {...fn映射的对象} />
