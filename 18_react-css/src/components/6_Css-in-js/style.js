import styled, {css} from 'styled-components'

// 1.基本使用
export const Wrapper = styled.div`
  h2{
    font-size: 30px
  }
  
  footer{
    background-color: pink;
  }
`
// 将section子元素单独抽取一个样式组件
export const SectionWrapper = styled.section`
  border: 1px solid red;
  border-radius: 10px;
  .title{
    font-size: 24px;
    color: #ffccec;
  }
  p {
    background-color: purple;
    &:hover{
      text-shadow: 1px 1px 1px #ccc;
    }
  }
`