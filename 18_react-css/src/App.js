import React from 'react'
import InlineStyle from './components/1_内联样式的CSS/inline-style'
import NoneStyle from './components/2_直接引入CSS/none-style'
import ModuleStyle from './components/3_CSS module模块化/module-style'

function App() {
  return (
    <div className="App">
      {/* <InlineStyle /> */}
      {/* <NoneStyle /> */}
      <ModuleStyle />
    </div>
  );
}

export default App;
