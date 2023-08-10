import { PureComponent } from 'react'
import { connect } from 'react-redux'
import {addAction, subAction} from '../store/creatorAction'

export class About extends PureComponent {
  render() {
    const { count, articles, addNumber, subNumber } = this.props; // 对应map中的对象属性count
    return (
      <div>
        <h2>About Count: {count}</h2>
        <button onClick={() => addNumber(5)}>+5</button>
        <button onClick={() => subNumber(5)}>-5</button>
        <div>
          <h2>Articles数据</h2>
          {
            articles.map((item) => <li key={item.id}>{item.title}</li>)
          }
        </div>
      </div>
    )
  }
}

// connect() 返回值是一个高阶组件，返回的是一个函数
// 在类组件中需要调用connect函数时，传入两个参数fn1，fn2
// fn1返回store中需要的state数据
const mapStateToProps = (state) => ({
  count: state.a.count, // 这里的count传递到props中this.props.count
  articles: state.a.articles
})
// fn2返回dispatch所处理的函数
const mapDispatchToProps = (dispatch) => ({
  // 这里的count传递到props中this.props.addNumber 和 subNumber
  addNumber(num) {
    dispatch(addAction(num))
  },
  subNumber(num) {
    dispatch(subAction(num))
  },
})

// 这里会将fn1中返回对象，<About {...this.props} {...fn映射的对象} />
export default connect(mapStateToProps, mapDispatchToProps)(About) 
