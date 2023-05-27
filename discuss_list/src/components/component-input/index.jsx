import { Component } from 'react'

class ComponentInput extends Component {

  state = {  }

  changeTextarea (e) {
    let content = e.target.value
    this.props.changeComment(content)
  }

  render() { 
    const { content, btnComment } = this.props
    return (
      <>
        <h3 className='comm-head'>评论</h3>
        <div className='comm-input'>
          <textarea value={content} onChange={e => this.changeTextarea(e) } placeholder="爱发评论的人，运气都很棒"></textarea>
          <div className="foots">
            <div className="word">{content.length}/100</div>
            <div className="btn" onClick={btnComment} >发表评论</div>
          </div>
        </div>
      </>
    );
  }
}

export default ComponentInput;