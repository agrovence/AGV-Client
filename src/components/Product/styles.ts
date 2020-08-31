import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background: #f0f0f5;
  border-radius: 8px;
  min-width: 400px;
  max-width: 400px;
  width: 300px;
  height: 300px;
`

export const ProductSection = styled.header`
  width: 100%;
  height: 100%;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ff9000;
    border-radius: 8px 8px 0px 0px;

    img {
      width: 200px;
    }
  }

  section {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h2 {
      color: #3d3d4d;

      margin-top: 8px;
    }

    a {
      color: #3d3d4d;

      margin-top: 16px;
      b {
        font-style: normal;
        font-size: 18px;
        line-height: 34px;
        color: #b92e31;
        font-weight: 600;
      }
    }
  }
  /*
  overflow: hidden;
  text-align: center;

  img {
    pointer-events: none;
    user-select: none;
    width: 200px;
  } */
`
