import { Component } from 'react'
import ComponentListItem from '../component-list-item';
import ComponentInput from '../component-input';
import ComponentHead from '../component-head';
import './index.css'

class ComponentList extends Component {
  state = {
    // 当前用户
    user: {
      name: '清风徐来',
      vip: true,
      avatar: 'https://static.youku.com/lvip/img/avatar/310/6.png',
    },
    content: '',
    active: 'default',
    // 评论列表
    comments: [
      {
        id: 100,
        name: '__RichMan',
        avatar: 'https://r1.ykimg.com/051000005BB36AF28B6EE4050F0E3BA6',
        content:
          '这阵容我喜欢😍靳东&闫妮，就这俩名字，我就知道是良心剧集...锁了🔒',
        time: new Date('2021/10/12 10:10:23'),
        vip: true,
        collect: false,
      },
      {
        id: 101,
        name: '糖蜜甜筒颖',
        avatar:
          'https://image.9xsecndns.cn/image/uicon/712b2bbec5b58d6066aff202c9402abc3370674052733b.jpg',
        content:
          '突围神仙阵容 人民的名义第三部来了 靳东陈晓闫妮秦岚等众多优秀演员实力派 守护人民的财产 再现国家企业发展历程',
        time: new Date('2021/09/23 15:12:44'),
        vip: false,
        collect: true,
      },
      {
        id: 102,
        name: '清风徐来',
        avatar: 'https://static.youku.com/lvip/img/avatar/310/6.png',
        content:
          '第一集看的有点费力，投入不了，闫妮不太适合啊，职场的人哪有那么多表情，一点职场的感觉都没有',
        time: new Date('2021/07/01 00:30:51'),
        vip: true,
        collect: false,
      },
    ],
  };

  changeComment(content) {
    if(content.length >= 100) content = content.substr(0,100)
    console.log(content);
    this.setState(() => ({ content }))
  }

  // 发表评论
  btnComment = () => {
    const data = {
      ...this.state.user,
      id: Math.random()+1,
      content: this.state.content,
      time: new Date()
    }
    this.setState({
      comments: [data, ...this.state.comments ],
      content: '' // 清空内容
    });
  }

  // 删除评论
  delComment (e, id) {
    console.log(e, id);
    // 获取 id
    this.setState({
      comments: this.state.comments.filter(item => item.id !== id)
    })
  }

  // 收藏评论&取消收藏
  onCollect(id) {
    this.setState({
      comments: this.state.comments.map(item => {
        if (item.id === id) {
          return { ...item, collect: !item.collect}
        } else {
          return item
        }
      })
    })
  }

  setActive(active){
    console.log(active);
    if (active !== this.state.active) this.setState(() => ({active}))
  }

  // 时间排序 默认排序
  sortNewList() {
    const newList = [...this.state.comments];
    if (this.state.active === 'default') {
      newList.sort((p, c) => c.id - p.id);
    }
    if (this.state.active === 'time') {
      newList.sort((p, c) => c.time - p.time);
    }
    console.log(newList);
    return newList
  }

  render() {
    const { user, content, comments, active } = this.state;

    return (
      <div className='comments'>
        <ComponentInput content={content}
          changeComment={this.changeComment.bind(this)}
          btnComment={this.btnComment.bind(this)} />
        <ComponentHead comments={comments} active={active} setActive={this.setActive.bind(this)} />
        <ul className="comm-list">
          {
            this.sortNewList().map(item => {
              return (
                <ComponentListItem comment={item} user={user} key={item.id}
                  del={this.delComment.bind(this)}
                  isCollect={this.onCollect.bind(this)} />
              )
            })
          }
        </ul>
      </div>
    );
  }
}

export default ComponentList;