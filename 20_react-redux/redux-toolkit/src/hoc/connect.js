// redux connect中的实现原理了解
// 参数1：处理redux中state，用于直接展示state数据
// 参数2：处理redux中dispatch，调用
// 返回值是一个高阶组件
import { PureComponent } from 'react'
// import { store } from '../store' // 引入redux创建store，存在强耦合问题，这里store是写死的
import {StoreContext} from './storeContext'

export function connect (mapStateToProps, mapDispatchToProps) {
  // 高阶组件：函数
  return function(WrapperComponent) {
    class Wrapper extends PureComponent {
      constructor(props, context) {
        super(props)
        // this.state = mapStateToProps(store.getState())
        this.state = mapStateToProps(context.getState())
      }
      
      componentDidMount() {
        // 添加数据订阅，当state数据发送变化强制更新重新执行render函数
        // store.subscribe(() => this.forceUpdate())
        // 但强制刷新，存在问题所有数据都会更新
        this.unsubscribe = this.context.subscribe(() => this.setState(mapStateToProps(this.context.getState())))
      }
      componentWillUnmount() {
        this.unsubscribe()
      }

      render() {
        /* 
          const mapStateToProps = (state) => ({
            count: state.count,
          })
          const mapDispatchToProps = (dispatch) => ({
            addNum: (num) => {
              dispatch(add(num))
            },
          })
         */
        // 调用返回对象state { count: state.count }
        // const state = mapStateToProps(store.getState())
        const dispatch = mapDispatchToProps(this.context.dispatch)
        // return <WrapperComponent {...this.props} {...state} { ...dispatch }/> // 结构state
        return <WrapperComponent {...this.props } {...this.state} { ...dispatch }/> // 结构state
      }

      // 将store解除耦合
      static contextType = StoreContext // 可以通过this.context获取数据
    }

    return Wrapper // 将类组件返回
  }
}