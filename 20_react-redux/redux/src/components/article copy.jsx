import { PureComponent } from 'react'
import { connect } from 'react-redux'
import { articlesAction } from '../store/actionCreators'
import axios from 'axios'

export class Article extends PureComponent {
  componentDidMount() {
    const {changeArticle} = this.props
    axios.get('https://www.echouu.com/api/articles/list?page=1&pageSize=5').then(res => {
      const article = res.data.data.list
      changeArticle(article)
    })
  }
  
  render() {
    const { articles } = this.props; // 对应map中的对象属性count
    return (
      <div>
        <h2>Article Page</h2>
        <div>
          {
            articles.map((item) => <li key={item.id}>{item.title}</li>)
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  articles: state.a.articles
})
// fn2返回dispatch所处理的函数
const mapDispatchToProps = (dispatch) => ({
  changeArticle(art) {
    dispatch(articlesAction(art))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Article) 
