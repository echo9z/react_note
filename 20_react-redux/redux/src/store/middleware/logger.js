// 实现以一个log日志中间件
function logger(store){
  // 在dispatch之前进将dispatch函数进行保存
  let next = store.dispatch
  function actionAsync(action){
    console.log('action:', action)
    next(action)
    console.log('next action:', store.getState())
  }
  // monkey patch 猴补丁
  // 将redux中dispatch指向自定函数
  store.dispatch = actionAsync
}

export default logger