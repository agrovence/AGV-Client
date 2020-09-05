import styled from 'styled-components'

export const Container = styled.div``

export const Header = styled.header`
  padding: 32px 0;
  background: #28262e;
`

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  > img {
    height: 80px;
  }
`

export const Navigators = styled.div`
  display: flex;
  align-items: center;
  margin-left: 80px;

  div {
    display: flex;
    flex-direction: row;
    margin-left: 100px;
    line-height: 24px;
    span {
      margin-right: 70px;
      a {
        text-decoration: none;
        color: #f4ede8;
        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
`

export const AuthContent = styled.div`
  display: flex;
  align-items: center;
  margin-right: 80px;

  > a {
    display: flex;
    flex-direction: row;
    margin-left: 100px;
    line-height: 24px;
    margin-right: -50px;
    font-size: 18px;

    text-decoration: none;
    color: #f4ede8;

    svg {
      margin-top: 3px;
      margin-right: 10px;
    }

    &:hover {
      opacity: 0.8;
    }
  }

  button {
    width: 170px;
    margin-top: -5px;
  }
`

export const MainSection = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;

  div {
    flex-direction: column;

    h1 {
      font-size: 40px;
      margin-bottom: 24px;
      text-align: left;
    }

    p {
      display: block;
      margin-top: 80px;
    }

    a {
      margin-top: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;

      button {
        width: 300px;
      }
    }
  }

  img {
  }
`

export const Representantes = styled.div`
  padding: 30px 0;
  background: #f4ede8;

  width: 100%;
  margin: 42px auto 0;
  display: flex;
  align-items: center;
  flex-direction: row;

  > img {
    display: flex;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 70px;
  }
`

export const RecentProducts = styled.div`
  margin-top: 30px;

  h1 {
    font-size: 40px;
    margin-top: 24px;
    margin-bottom: 24px;
    text-align: center;
  }

  section {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    max-width: 1280px;
    flex-wrap: wrap;
    margin-bottom: 54px;

    > div {
      margin-top: 10px;
      margin-right: 16px;
    }
  }
`

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 50px auto 0;
  width: 100%;
`
