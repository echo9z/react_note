import { Component } from 'react'

class ComponentHead extends Component {

  state = {  }
  render() {
    const {comments, active, setActive} = this.props
    return (
      <h3 className='comm-head'>
        热门评论 <sub>({comments.length})</sub>
        <span className={active === 'default'? 'active': ''}
          onClick={() => setActive('default')}>默认</span>
        <span className={active === 'time'? 'active': ''}
          onClick={() => setActive('time')}>时间</span>
      </h3>
    );
  }
}

export default ComponentHead;