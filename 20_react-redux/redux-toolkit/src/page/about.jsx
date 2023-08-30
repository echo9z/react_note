import { PureComponent } from 'react'

// 自己实现的react-redux中的connect函数
import { connect } from '../hoc/connect'
// action
import { add } from '../features/counter/counterSlice'

class About extends PureComponent {
  render() {
    const { count } = this.props
    return (
      <div>
        <h2>About Count：{count}</h2>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  count: state.counter.count,
})

const mapDispatchToProps = (dispatch) => ({
  addNum: (num) => {
    dispatch(add(num))
  },
})


export default connect(mapStateToProps, mapDispatchToProps)(About)