import { PureComponent } from 'react'
import { connect } from 'react-redux'
import { fetchArticle } from './articleSlice'

export class Article extends PureComponent {
  componentDidMount() {
    this.props.changeArticle()
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
  articles: state.article.articleList
})
// fn2返回dispatch所处理的函数
const mapDispatchToProps = (dispatch) => ({
  changeArticle() {
    dispatch(fetchArticle())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Article) 
