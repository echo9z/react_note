import { PureComponent } from 'react'
import store from '../store';
import { addAction, subAction } from '../store/creatorAction';

export default class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      count: store.getState().count
    };
  }
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      // 通过订阅获取最新的count值
      this.setState({ count: store.getState().count });
    })
  }
  componentWillUnmount() {
    this.unsubscribe()
  }
  render() {
    const { count } = this.props
    return (
      <div>
        <h2 style={{color: 'red'}}>User Count:{count}</h2>
        <button onClick={() => store.dispatch(addAction(10))}>+10</button>
        <button onClick={() => store.dispatch(subAction(5))}>-5</button>
      </div>
    )
  }
}
