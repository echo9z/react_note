import styled, {css, keyframes} from 'styled-components'
import {primaryColor} from '../../style/variables'
// 1.基本使用
export const Wrapper = styled.div`
  h2{
    font-size: 30px
  }
  
  footer{
    background-color: pink;
  }
`
// 2.将section子元素单独抽取一个样式组件
// 3.可以接收外物的props
// 4.attrs设置元素标签属性 <section color='blue'></section>
export const SectionWrapper = styled.section.attrs(props => ({
  color: props.color || 'blue', // 当组件没有传递color，默认值为blue
}))`
  border: 1px solid red;
  border-radius: 10px;
  .title{
    font-size: ${props => props.size}px;
    color: ${props => props.color};
  }
  p {
    background-color: ${primaryColor};
    &:hover{
      text-shadow: 1px 1px 1px #ccc;
    }
  }
`

export const BaseButton = styled.button`
  padding: 8px 32px;
  border: 1px solid skyblue;
  border-radius: 5px;
`
// 继承BaseButton样式
export const WarnButton = styled(BaseButton)`
  background-color: #fff;
  border: 1px red dashed;
  color: red;
  &:hover{
    color: #ffffff;
    background-color: red;
  }
`

export const Box = styled.div`
  width: 50px;
  height: 50px;
  color: ${props => props.theme.color};
  transition: all 0.5s ease-in-out;
  &:hover{
    background-color: ${props => props.theme.hoverColor}
  }
`
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 32px 16px;
  font-size: 18px;
`

export const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #BF4F74;
  color: '#BF4F74';
  margin: 0 1em;
  padding: 0.25em 1em;
  ${props =>
    props.$primary && css`
      background: #BF4F74;
      color: white;
    `}
`