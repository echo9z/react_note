import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
// 代替原有reducer
const initialState = {
  articleList: [],
  status: 'idle',
}

// createAsyncThunk 创建一个异步请求action，返回Promise， 通过dispatch(fetchArticle())触发
export const fetchArticle = createAsyncThunk(
  'article/fetchArticle',
  async (extra, { dispatch, getState }) => {
    console.log("🚀 ~ extra, dispatch, getState:", extra, dispatch, getState())
    const {data} = await axios.get('https://www.echouu.com/api/articles/list?page=1&pageSize=5')
    // throw new Error() 手动抛出异常fetchArticle返回
    const article = data.data.list
    // dispatch(changeArticleList(article))
    return article // action.payload
  }
)
// console.log("🚀 ~fetchArticle:", fetchArticle.fulfilled())

// 导出Slice切片，包含 reducer函数的对象、切片名称和state初始状态值
export const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    changeArticleList: (state, action) => {
      state.articleList = action.payload
    }
  },
  // extraReducers: {
  //   // 这种写法 obj = { name: 'fulfilled' } [obj.name]() {}
  //   [fetchArticle.fulfilled](state, action) {
  //     state.status = 'succeeded'
  //     state.articleList.push(...action.payload)
  //   }
  // },
  // 官方推荐
  extraReducers: (builder) => {
    // 添加多个Case， addCase(action, callback(state, action))
    builder
      .addCase(fetchArticle.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchArticle.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.articleList.push(...action.payload)
      })
      .addCase(fetchArticle.rejected, (state, action) => {
        state.status = 'failed'
      })
  }
})

// 导出action
export const {changeArticleList } = articleSlice.actions

// 导出reducer
export default articleSlice.reducer