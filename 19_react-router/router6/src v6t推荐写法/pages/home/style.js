import styled from 'styled-components'
export const HomeWrapper = styled.div`
  .tag {
    li {
      list-style: none;
      display: inline-block;
      margin: 0 10px;
      border-radius: 10px;
      overflow: hidden;
      a {
        display: inline-block;
        padding: 0 10px;
        height: 40px;
        line-height: 40px;
      }
      .active {
        color: red;
        background-color: #ccc;
        font-weight: 400;
      }
    }
  }
`