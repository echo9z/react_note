import React,{useState} from 'react'
import { Wrapper, SectionWrapper, WarnButton, Box, Rotate, Button } from './style'

export default function CssInJsComp() {
  const [style, setStyle] = useState({
    fontSize: 30,
    color: 'skyblue',
  })
  return (
    <Wrapper>
      {/* <h2>css-in-js-Comp</h2>
      <SectionWrapper size={style.fontSize} color={style.color}>
        <h4 className='title'>title123456</h4>
        <p className='content'>这是一段文字123456</p>
        <button onClick={() => setStyle(v => ({...v, color: 'yellow'}))}>修改SectionWrapper颜色</button>
      </SectionWrapper>
      <footer>
        关于echo9z
      </footer> */}

      <Box>123</Box>
      <Rotate>&lt; 💅🏾 &gt;</Rotate>
      <Button>I&apos;m &lt;Button&gt;</Button>
      <Button $primary>Primary Button</Button>
      {/* <WarnButton>warning</WarnButton> */}
    </Wrapper>
  )
}
