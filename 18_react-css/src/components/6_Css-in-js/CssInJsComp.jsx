import React from 'react'
import { Wrapper, SectionWrapper } from './style'

export default function CssInJsComp() {
  
  return (
    <Wrapper>
      <h2>css-in-js-Comp</h2>
      <SectionWrapper>
        <h4 className='title'>title123456</h4>
        <p className='content'>这是一段文字123456</p>
      </SectionWrapper>
      <footer>
        关于echo9z
      </footer>
    </Wrapper>
  )
}
