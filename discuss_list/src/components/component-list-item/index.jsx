import { Component } from 'react'
import classNames  from 'classNames'
import dayjs from 'dayjs'
class ComponentListItem extends Component {
  state = {  }
  render() {
    const { user, comment, del, isCollect } = this.props
    const formatTime = (time) => dayjs(time).format('YYYY/MM/DD HH:mm:ss');
    return (
      <li className='comm-item'>
        <div className='avatar' style={ {backgroundImage: `url(${comment.avatar})`} }>
        </div>
        <div className='info'>
          {/* 不是vip 不添加vip类，同时没有vip img小logo */}
          <p className={ classNames('name', {vip: comment.vip}) }>
            {comment.name}
            {comment.vip? <img src="https://gw.alicdn.com/tfs/TB1c5JFbGSs3KVjSZPiXXcsiVXa-48-48.png" alt='' />: null}
          </p>
          <p className="time">
            {formatTime(comment.time)}
            <span onClick={() => isCollect(comment.id)} className={`iconfont icon-collect${comment.collect ? '-sel' : ''}`}></span>
            { comment.name === user.name ? <span className="del"
              onClick={ (e) => del(e, comment.id) }>删除</span> : null}
          </p>
          <p>
            {comment.content}
          </p>
        </div>
      </li>
    );
  }
}

export default ComponentListItem;