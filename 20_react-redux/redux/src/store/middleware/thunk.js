// 实现一个 thunk 函数
function thunks(store){
  // 在dispatch之前进将dispatch函数进行保存
  let next = store.dispatch
  function dispatchThunks(action){
    console.log("🚀 ~ file: index.js:44 ~ dispatchThunks ~ action:", action)
    if(typeof action === 'function'){
      // 如果是函数，则执行调函函数
      // 这里为什么是store.dispatch而不是之前的next，原因是在于触发dispatch中如果还存在dispatch操作执行的就不是猴补丁的函数
      /**
       * export const fetchArticlesAction = (value) => {
          dispatch(() => { ... ... })
          return async (dispatch, getState) => {
            const {data} = await axios.get('https://www.echouu.com/api/articles/list?page=1&pageSize=5')
            const article = data.data.list
            dispatch(articlesAction(article))
          }
        }
       */
      action(store.dispatch, store.getState)
    } else {
      next(action)
    }
  }
  // monkey patch 猴补丁
  // 将redux中dispatch指向自定函数
  store.dispatch = dispatchThunks
}

export default thunks